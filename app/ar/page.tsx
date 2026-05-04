// CH-32: Arabic route (RTL)
import type { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = { title: "النسخة العربية" }
export default function ArPage() {
  return (
    <div dir="rtl" lang="ar" style={{textAlign:"right",fontFamily:"system-ui,sans-serif"}}>
      <div style={{display:"flex",gap:"10px",marginBottom:"16px",justifyContent:"flex-end"}}>
        <Link href="/ar" style={{color:"#38bdf8",textDecoration:"none",fontWeight:"bold"}}>AR</Link>
        <Link href="/en" style={{color:"#94a3b8",textDecoration:"none"}}>EN</Link>
      </div>
      <h1 style={{color:"#38bdf8"}}>مرحباً — CH-32: مسارات ثنائية اللغة</h1>
      <p style={{color:"#94a3b8"}}>هذه هي النسخة العربية (من اليمين إلى اليسار). راجع /en للنسخة الإنجليزية.</p>
    </div>
  )
}
