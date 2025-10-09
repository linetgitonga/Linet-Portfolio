import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { FloatingNav } from "@/components/floating-nav"

export const metadata: Metadata = {
  title: "Linet Gitonga - Software Developer Portfolio",
  description:
    "Full-stack software developer specializing in Django, React, and AI-powered solutions for African communities.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          {/* <FloatingNav /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
