// CH-29 – Protected routes  |  CH-47 – A/B Edge test
import { NextRequest, NextResponse } from "next/server"

const PROTECTED = ["/dashboard"]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ── CH-29: auth guard ──────────────────────────────────────────
  if (PROTECTED.some(p => pathname.startsWith(p))) {
    const token = req.cookies.get("mock-token")?.value
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = "/login"
      return NextResponse.redirect(url)
    }
  }

  // ── CH-47: A/B test – assign variant cookie ─────────────────────
  const res = NextResponse.next()
  if (!req.cookies.get("ab-variant")) {
    const variant = Math.random() < 0.5 ? "A" : "B"
    res.cookies.set("ab-variant", variant, { maxAge: 60 * 60 * 24 })
  }

  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/"],
}
