"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Calendar, User, Lock, Trash2, CheckCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getContactSubmissions, markContactAsRead, deleteContact, type ContactSubmission } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"

export default function AdminContactsPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const result = await getContactSubmissions(password)

    if (result.success && result.submissions) {
      setIsAuthenticated(true)
      setSubmissions(result.submissions)
      toast({
        title: "Access granted",
        description: "Welcome to the admin dashboard",
      })
    } else {
      toast({
        title: "Access denied",
        description: result.error || "Invalid password",
        variant: "destructive",
      })
    }

    setIsLoading(false)
  }

  const handleMarkAsRead = async (id: number) => {
    const result = await markContactAsRead(id)

    if (result.success) {
      setSubmissions(submissions.map((sub) => (sub.id === id ? { ...sub, read: true } : sub)))
      toast({
        title: "Marked as read",
        description: "Contact has been marked as read",
      })
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to update contact",
        variant: "destructive",
      })
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this contact?")) {
      return
    }

    const result = await deleteContact(id)

    if (result.success) {
      setSubmissions(submissions.filter((sub) => sub.id !== id))
      toast({
        title: "Deleted",
        description: "Contact has been deleted",
      })
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to delete contact",
        variant: "destructive",
      })
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Admin Access</CardTitle>
              <CardDescription>Enter password to view contact submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background/50 border-border"
                  />
                  <p className="text-xs text-muted-foreground">
                    Default password: admin123 (Change this in production!)
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Access Dashboard"}
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/">Back to Portfolio</Link>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  const unreadCount = submissions.filter((sub) => !sub.read).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Contact Submissions
              </h1>
              <p className="text-muted-foreground mt-2">
                {submissions.length} {submissions.length === 1 ? "message" : "messages"} received
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {unreadCount} unread
                  </Badge>
                )}
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/">Back to Portfolio</Link>
            </Button>
          </div>

          {submissions.length === 0 ? (
            <Card className="border-border">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <Mail className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
                <p className="text-muted-foreground text-center">Contact form submissions will appear here</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {submissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className={`border-border hover:border-purple-500/50 transition-colors ${!submission.read ? "bg-purple-500/5" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1">
                          <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5 text-purple-500" />
                            {submission.name}
                            {!submission.read && (
                              <Badge variant="default" className="bg-purple-500">
                                New
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {submission.email}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(submission.timestamp).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm whitespace-pre-wrap">{submission.message}</p>
                      </div>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        <Button size="sm" asChild>
                          <a href={`mailto:${submission.email}`}>Reply via Email</a>
                        </Button>
                        {!submission.read && (
                          <Button size="sm" variant="outline" onClick={() => handleMarkAsRead(submission.id)}>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Mark as Read
                          </Button>
                        )}
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(submission.id)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
