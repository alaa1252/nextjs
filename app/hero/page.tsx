import type { Metadata } from "next"
export const metadata: Metadata = { title: "Hero Section" }
export default function HeroPage() {
  return (
    <div style={{minHeight:"70vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"40px 20px",background:"linear-gradient(135deg,#1e293b 0%,#0f172a 100%)",borderRadius:"12px"}}>
      <span style={{color:"#38bdf8",fontSize:"13px",background:"#1e3a5f",padding:"4px 14px",borderRadius:"20px",marginBottom:"16px",display:"inline-block"}}>CH-03 — Responsive Hero</span>
      <h1 style={{fontSize:"clamp(28px,5vw,56px)",fontWeight:"bold",color:"#f1f5f9",margin:"0 0 16px"}}>Build Modern Apps<br/><span style={{color:"#38bdf8"}}>with Next.js</span></h1>
      <p style={{color:"#94a3b8",maxWidth:"480px",marginBottom:"32px",lineHeight:1.6}}>50 challenges from beginner to advanced covering routing, data, auth, and deployment.</p>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"center"}}>
        <a href="/products" style={{padding:"12px 28px",background:"#3b82f6",color:"white",borderRadius:"8px",textDecoration:"none",fontWeight:"600"}}>View Products</a>
        <a href="/blog"     style={{padding:"12px 28px",background:"transparent",color:"#38bdf8",border:"2px solid #38bdf8",borderRadius:"8px",textDecoration:"none",fontWeight:"600"}}>Read Blog</a>
      </div>
    </div>
  )
}
