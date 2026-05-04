"use client"
// CH-16: Dark/Light mode toggle
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored) setDark(stored === "dark")
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light")
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <button onClick={() => setDark(v => !v)} style={{ padding:"6px 14px", borderRadius:"6px", background:"#334155", color:"#e2e8f0", border:"none", cursor:"pointer", fontSize:"13px" }}>
      {dark ? "☀ Light" : "🌙 Dark"} Mode
    </button>
  )
}
