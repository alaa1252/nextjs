// CH-40: Streaming Product Page
import { Suspense } from "react"
import type { Metadata } from "next"
export const metadata: Metadata = { title: "Streaming Product" }

async function ProductHeader() {
  return (
    <div style={{background:"#1e293b",padding:"24px",borderRadius:"8px",marginBottom:"16px",border:"1px solid #334155"}}>
      <span style={{color:"#38bdf8",fontSize:"12px"}}>Electronics</span>
      <h2 style={{color:"#f1f5f9",margin:"8px 0 4px"}}>Wireless Headphones Pro</h2>
      <p style={{color:"#34d399",fontSize:"24px",fontWeight:"bold",margin:0}}>$149</p>
    </div>
  )
}

async function ProductReviews() {
  await new Promise(r => setTimeout(r, 1200))
  const reviews = [{ id:1,user:"Ali",rating:5,text:"Great product!" },{ id:2,user:"Sara",rating:4,text:"Good value." }]
  return (
    <div style={{background:"#1e293b",padding:"20px",borderRadius:"8px",marginBottom:"16px",border:"1px solid #334155"}}>
      <h3 style={{color:"#38bdf8",marginTop:0}}>Reviews (streamed after 1.2s)</h3>
      {reviews.map(r => <div key={r.id} style={{marginBottom:"10px"}}><strong style={{color:"#f1f5f9"}}>{r.user}</strong> <span style={{color:"#fbbf24"}}>{"★".repeat(r.rating)}</span> <p style={{color:"#94a3b8",margin:"2px 0",fontSize:"13px"}}>{r.text}</p></div>)}
    </div>
  )
}

async function StockInfo() {
  await new Promise(r => setTimeout(r, 1800))
  return (
    <div style={{background:"#1e293b",padding:"20px",borderRadius:"8px",border:"1px solid #334155"}}>
      <h3 style={{color:"#38bdf8",marginTop:0}}>Stock (streamed after 1.8s)</h3>
      <p style={{color:"#34d399",margin:0}}>In Stock — 15 units remaining</p>
    </div>
  )
}

function Skeleton({ height=80 }: { height?: number }) {
  return <div style={{background:"#334155",height:`${height}px`,borderRadius:"8px",marginBottom:"16px",animation:"pulse 1.5s infinite"}} />
}

export default function StreamingPage() {
  return (
    <div style={{maxWidth:"600px"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Streaming Page — CH-40</h1>
      <p style={{color:"#94a3b8",marginBottom:"20px",fontSize:"13px"}}>Critical content renders first. Slow sections stream in independently via Suspense.</p>
      <ProductHeader />
      <Suspense fallback={<Skeleton height={100} />}><ProductReviews /></Suspense>
      <Suspense fallback={<Skeleton height={80}  />}><StockInfo /></Suspense>
    </div>
  )
}
