"use client"
// CH-02: shared nav | CH-07: active link | CH-28: auth-aware
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "@/lib/data"

type Props = { username?: string }

export default function Navbar({ username }: Props) {
  const path = usePathname()
  return (
    <nav style={{ background:"#1e293b", padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", height:"56px", flexWrap:"wrap", gap:"8px" }}>
      <Link href="/" style={{ color:"#38bdf8", fontWeight:"bold", fontSize:"18px", textDecoration:"none" }}>Next50</Link>
      <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} style={{ color: path === l.href ? "#38bdf8" : "#cbd5e1", fontWeight: path === l.href ? "bold" : "normal", textDecoration:"none", fontSize:"14px" }}>
            {l.label}
          </Link>
        ))}
      </div>
      <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
        {username
          ? <><span style={{ color:"#94a3b8", fontSize:"13px" }}>Hi, {username}</span><Link href="/dashboard" style={{ color:"#38bdf8", fontSize:"13px", textDecoration:"none" }}>Dashboard</Link></>
          : <Link href="/login" style={{ color:"#38bdf8", fontSize:"13px", textDecoration:"none" }}>Login</Link>
        }
      </div>
    </nav>
  )
}
