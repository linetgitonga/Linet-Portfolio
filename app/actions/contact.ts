"use server"

import { revalidatePath } from "next/cache"
import { getDatabase, type Contact } from "@/lib/db"

export interface ContactSubmission {
  id: number
  name: string
  email: string
  message: string
  timestamp: string
  read: boolean
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" }
  }

  // Sanitize inputs (prevent XSS)
  const sanitizedName = name.trim().slice(0, 100)
  const sanitizedEmail = email.trim().toLowerCase().slice(0, 100)
  const sanitizedMessage = message.trim().slice(0, 1000)

  try {
    const db = getDatabase()

    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, message)
      VALUES (?, ?, ?)
    `)

    const result = stmt.run(sanitizedName, sanitizedEmail, sanitizedMessage)

    console.log("[v0] New contact submission saved to database:", {
      id: result.lastInsertRowid,
      name: sanitizedName,
      email: sanitizedEmail,
    })

    revalidatePath("/admin/contacts")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error saving contact submission:", error)
    return { success: false, error: "Failed to save submission. Please try again." }
  }
}

export async function getContactSubmissions(password: string) {
  if (password !== "admin123") {
    return { success: false, error: "Invalid password" }
  }

  try {
    const db = getDatabase()

    const stmt = db.prepare(`
      SELECT id, name, email, message, created_at, read
      FROM contacts
      ORDER BY created_at DESC
    `)

    const contacts = stmt.all() as Contact[]

    const submissions: ContactSubmission[] = contacts.map((contact) => ({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      message: contact.message,
      timestamp: contact.created_at,
      read: contact.read === 1,
    }))

    return {
      success: true,
      submissions,
    }
  } catch (error) {
    console.error("[v0] Error fetching contact submissions:", error)
    return { success: false, error: "Failed to fetch submissions" }
  }
}

export async function markContactAsRead(id: number) {
  try {
    const db = getDatabase()

    const stmt = db.prepare(`
      UPDATE contacts
      SET read = 1
      WHERE id = ?
    `)

    stmt.run(id)

    revalidatePath("/admin/contacts")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error marking contact as read:", error)
    return { success: false, error: "Failed to update contact" }
  }
}

export async function deleteContact(id: number) {
  try {
    const db = getDatabase()

    const stmt = db.prepare(`
      DELETE FROM contacts
      WHERE id = ?
    `)

    stmt.run(id)

    revalidatePath("/admin/contacts")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting contact:", error)
    return { success: false, error: "Failed to delete contact" }
  }
}
