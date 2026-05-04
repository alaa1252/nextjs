// CH-43: Webhook Receiver + Event Log UI
"use client"
import { useEffect, useState } from "react"
export default function WebhookLogPage() {
  const [logs,   setLogs]   = useState<{id:string;type:string;timestamp:string}[]>([])
  const [status, setStatus] = useState("")

  async function fetchLogs() {
    const res  = await fetch("/api/webhook")
    const data = await res.json()
    setLogs(data)
  }

  async function sendMockEvent(type: string) {
    setStatus("Sending...")
    const res = await fetch("/api/webhook", {
      method: "POST",
      headers: { "Content-Type":"application/json", "x-webhook-secret":"whsec_test_123" },
      body: JSON.stringify({ type, data: { id: Date.now(), test: true } }),
    })
    const data = await res.json()
    setStatus(res.ok ? `Received: ${data.id}` : `Error: ${data.error}`)
    fetchLogs()
  }

  useEffect(() => { fetchLogs() }, [])

  return (
    <div style={{maxWidth:"700px"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Webhook Log — CH-43</h1>
      <p style={{color:"#94a3b8",marginBottom:"16px",fontSize:"13px"}}>POST /api/webhook — validates x-webhook-secret header before logging events.</p>
      <div style={{display:"flex",gap:"10px",marginBottom:"16px",flexWrap:"wrap"}}>
        {["order.created","payment.success","user.signup"].map(t => (
          <button key={t} onClick={()=>sendMockEvent(t)} style={{padding:"8px 16px",background:"#1e293b",color:"#38bdf8",border:"1px solid #334155",borderRadius:"6px",cursor:"pointer",fontSize:"13px"}}>
            Send: {t}
          </button>
        ))}
        <button onClick={fetchLogs} style={{padding:"8px 16px",background:"#334155",color:"#94a3b8",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"}}>Refresh</button>
      </div>
      {status && <p style={{color:"#34d399",fontSize:"13px",marginBottom:"12px"}}>{status}</p>}
      <div style={{background:"#1e293b",borderRadius:"8px",border:"1px solid #334155",overflow:"hidden"}}>
        {logs.length === 0
          ? <p style={{color:"#64748b",textAlign:"center",padding:"20px",fontSize:"13px"}}>No events yet. Send one above.</p>
          : logs.map(log => (
            <div key={log.id} style={{padding:"12px 16px",borderBottom:"1px solid #334155",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div><span style={{color:"#38bdf8",fontSize:"13px",marginRight:"12px"}}>{log.type}</span><span style={{color:"#64748b",fontSize:"11px"}}>ID: {log.id}</span></div>
              <span style={{color:"#475569",fontSize:"11px"}}>{new Date(log.timestamp).toLocaleTimeString()}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
