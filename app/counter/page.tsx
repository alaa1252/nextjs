// CH-10: Client Component with useState
"use client"
import { useState } from "react"
import type { Metadata } from "next"

export default function CounterPage() {
  const [count, setCount] = useState(0)
  const MIN = -10; const MAX = 10
  return (
    <div style={{maxWidth:"400px",margin:"0 auto",textAlign:"center",padding:"40px"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Interactive Counter — CH-10</h1>
      <p style={{color:"#94a3b8",marginBottom:"32px",fontSize:"13px"}}>useState + Client Component + min/max validation</p>
      <div style={{fontSize:"80px",fontWeight:"bold",color:"#f1f5f9",margin:"24px 0"}}>{count}</div>
      <div style={{display:"flex",gap:"12px",justifyContent:"center",marginBottom:"12px"}}>
        <button onClick={()=>setCount(c=>Math.max(MIN,c-1))} disabled={count<=MIN} style={{padding:"12px 28px",background:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"24px",opacity:count<=MIN?0.4:1}}>−</button>
        <button onClick={()=>setCount(0)} style={{padding:"12px 20px",background:"#64748b",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px"}}>Reset</button>
        <button onClick={()=>setCount(c=>Math.min(MAX,c+1))} disabled={count>=MAX} style={{padding:"12px 28px",background:"#22c55e",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"24px",opacity:count>=MAX?0.4:1}}>+</button>
      </div>
      <p style={{color:"#64748b",fontSize:"13px"}}>Range: {MIN} to {MAX}</p>
    </div>
  )
}
