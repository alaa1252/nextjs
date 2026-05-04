// CH-32: English route (LTR)
import type { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = { title: "English Version" }
export default function EnPage() {
  return (
    <div dir="ltr">
      <div style={{display:"flex",gap:"10px",marginBottom:"16px"}}>
        <Link href="/en" style={{color:"#38bdf8",textDecoration:"none",fontWeight:"bold"}}>EN</Link>
        <Link href="/ar" style={{color:"#94a3b8",textDecoration:"none"}}>AR</Link>
      </div>
      <h1 style={{color:"#38bdf8"}}>Welcome — CH-32: Bilingual Routes</h1>
      <p style={{color:"#94a3b8"}}>This is the English (LTR) version. The /ar route shows the Arabic (RTL) version.</p>
    </div>
  )
}
