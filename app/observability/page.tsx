// CH-50: Production Observability Starter
"use client"
import { useEffect, useState } from "react"
export default function ObservabilityPage() {
  const [health, setHealth] = useState<{status:string;uptime:number;timestamp:string}|null>(null)
  const [logs]  = useState([
    { level:"INFO",  msg:"App started",          time:"12:00:01" },
    { level:"INFO",  msg:"DB connection ready",   time:"12:00:02" },
    { level:"WARN",  msg:"Slow query detected",   time:"12:00:15" },
    { level:"ERROR", msg:"Failed to fetch prices",time:"12:00:30" },
    { level:"INFO",  msg:"Cache revalidated",     time:"12:01:00" },
  ])
  useEffect(() => {
    fetch("/api/health").then(r=>r.json()).then(setHealth)
  }, [])
  const levelColor: Record<string,string> = { INFO:"#34d399", WARN:"#f59e0b", ERROR:"#ef4444" }
  return (
    <div style={{maxWidth:"700px"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Observability — CH-50</h1>
      <p style={{color:"#94a3b8",marginBottom:"24px",fontSize:"13px"}}>Structured logs + health check + error boundaries = production-ready observability.</p>
      {/* Health Check */}
      <div style={{background:"#1e293b",padding:"20px",borderRadius:"8px",border:"1px solid #334155",marginBottom:"20px"}}>
        <h3 style={{color:"#38bdf8",marginTop:0}}>Health Check — GET /api/health</h3>
        {health
          ? <div style={{fontFamily:"monospace",fontSize:"13px",color:"#94a3b8"}}>
              <p style={{margin:"4px 0"}}>status:    <span style={{color:"#34d399"}}>{health.status}</span></p>
              <p style={{margin:"4px 0"}}>uptime:    {health.uptime.toFixed(1)}s</p>
              <p style={{margin:"4px 0"}}>timestamp: {health.timestamp}</p>
            </div>
          : <p style={{color:"#64748b",fontSize:"13px"}}>Fetching...</p>
        }
      </div>
      {/* Structured Logs */}
      <div style={{background:"#1e293b",borderRadius:"8px",border:"1px solid #334155",overflow:"hidden",marginBottom:"20px"}}>
        <div style={{padding:"12px 16px",borderBottom:"1px solid #334155"}}><h3 style={{color:"#38bdf8",margin:0}}>Structured Log Stream</h3></div>
        {logs.map((log,i) => (
          <div key={i} style={{padding:"10px 16px",borderBottom:"1px solid #1e293b",display:"flex",gap:"16px",fontFamily:"monospace",fontSize:"12px"}}>
            <span style={{color:"#475569"}}>{log.time}</span>
            <span style={{color:levelColor[log.level],width:"48px"}}>{log.level}</span>
            <span style={{color:"#cbd5e1"}}>{log.msg}</span>
          </div>
        ))}
      </div>
      {/* Checklist */}
      <div style={{background:"#1e293b",padding:"20px",borderRadius:"8px",border:"1px solid #334155"}}>
        <h3 style={{color:"#38bdf8",marginTop:0}}>Observability Checklist</h3>
        {[
          ["Health check endpoint",  true ],
          ["Structured logging",     true ],
          ["Error boundaries",       true ],
          ["Source maps in prod",    false],
          ["External APM (Sentry)",  false],
        ].map(([label, done]) => (
          <div key={label as string} style={{display:"flex",gap:"10px",marginBottom:"8px"}}>
            <span style={{color: done ? "#34d399" : "#ef4444"}}>{done ? "✓" : "✗"}</span>
            <span style={{color:"#cbd5e1",fontSize:"14px"}}>{label as string}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
