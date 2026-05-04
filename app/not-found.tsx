// CH-13: Not Found UI
import Link from "next/link"
export default function NotFoundPage() {
  return (
    <div style={{textAlign:"center",padding:"80px 20px"}}>
      <h1 style={{fontSize:"80px",color:"#334155",margin:0}}>404</h1>
      <h2 style={{color:"#e2e8f0"}}>Page Not Found</h2>
      <p style={{color:"#94a3b8",marginBottom:"24px"}}>The page you are looking for does not exist.</p>
      <Link href="/" style={{padding:"10px 24px",background:"#3b82f6",color:"white",borderRadius:"8px",textDecoration:"none"}}>Go Home</Link>
    </div>
  )
}
