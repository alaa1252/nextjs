"use client"
// CH-07: Breadcrumb
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumb() {
  const path  = usePathname()
  const parts = path.split("/").filter(Boolean)
  return (
    <nav style={{ fontSize:"13px", color:"#94a3b8", margin:"8px 0" }}>
      <Link href="/" style={{ color:"#38bdf8", textDecoration:"none" }}>Home</Link>
      {parts.map((p, i) => {
        const href = "/" + parts.slice(0, i + 1).join("/")
        const last = i === parts.length - 1
        return (
          <span key={href}>
            <span style={{ margin:"0 6px" }}>/</span>
            {last
              ? <span style={{ color:"#e2e8f0" }}>{p}</span>
              : <Link href={href} style={{ color:"#38bdf8", textDecoration:"none" }}>{p}</Link>
            }
          </span>
        )
      })}
    </nav>
  )
}
