import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const siteUrl = "https://linetgitonga.me"
const siteTitle = "Linet Gitonga — Software Developer & CS Graduate"
const siteDescription =
  "Portfolio of Linet Gitonga — software developer and computer science graduate building full-stack and AI-powered web applications."

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "software developer",
    "computer science graduate",
    "portfolio",
    "full-stack developer",
    "Django developer",
    "React developer",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Linet Gitonga",
    images: [
      {
        url: `${siteUrl}/placeholder-logo.png`,
        width: 1200,
        height: 630,
        alt: "Linet Gitonga",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: "@linetgitonga",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Linet Muthoni Gitonga",
    url: siteUrl,
    sameAs: [
      "https://github.com/linetgitonga",
      "https://www.linkedin.com/in/linet-gitonga",
    ],
    jobTitle: "Software Developer",
    description: siteDescription,
  }

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "Linet Gitonga",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
    </>
  )
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <link rel="canonical" href={siteUrl} />
          <meta name="robots" content="index, follow" />
          {children}
          <Toaster />
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  )
}
