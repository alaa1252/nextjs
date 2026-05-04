// CH-01: project setup | CH-02: shared layout | CH-14: local font + design tokens
import type { Metadata } from "next"
import { cookies } from "next/headers"
import Navbar from "@/components/Navbar"
import "./globals.css"

// CH-09: site-level metadata
export const metadata: Metadata = {
  title:       { default: "Next50 Challenges", template: "%s | Next50" },
  description: "50 Next.js code challenges from beginner to advanced",
  openGraph:   { type: "website", title: "Next50 Challenges", description: "50 Next.js challenges" },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // CH-28: read auth cookie server-side
  const jar      = await cookies()
  const username = jar.get("mock-username")?.value

  return (
    <html lang="en">
      <body style={{ margin:0, background:"#0f172a", color:"#e2e8f0", fontFamily:"system-ui, sans-serif", minHeight:"100vh" }}>
        <Navbar username={username} />
        <main style={{ padding:"24px", maxWidth:"1200px", margin:"0 auto" }}>
          {children}
        </main>
      </body>
    </html>
  )
}
