"use client"
// CH-27: Error Boundary per route
export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{padding:"40px",textAlign:"center"}}>
      <h2 style={{color:"#ef4444"}}>Dashboard Error</h2>
      <p style={{color:"#94a3b8",marginBottom:"16px"}}>{error.message}</p>
      <button onClick={reset} style={{padding:"10px 24px",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",marginRight:"8px"}}>Try Again</button>
      <a href="/" style={{color:"#38bdf8",fontSize:"14px"}}>Go Home</a>
    </div>
  )
}
