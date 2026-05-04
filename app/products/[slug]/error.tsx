"use client"
// CH-27: Error Boundary per route
export default function ProductError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{padding:"32px",textAlign:"center"}}>
      <h2 style={{color:"#ef4444"}}>Something went wrong</h2>
      <p style={{color:"#94a3b8",marginBottom:"16px"}}>{error.message}</p>
      <button onClick={reset} style={{padding:"10px 24px",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Try again</button>
      <p style={{color:"#94a3b8",marginTop:"8px",fontSize:"13px"}}>Need help? Contact support.</p>
    </div>
  )
}
