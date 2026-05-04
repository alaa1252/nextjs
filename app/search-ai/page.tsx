// CH-44: AI Search Assistant Route UI
"use client"
import { useState } from "react"
export default function AISearchPage() {
  const [query,       setQuery]       = useState("")
  const [suggestions, setSuggestions] = useState<{id:number;title:string;price:number;href:string}[]>([])
  const [loading,     setLoading]     = useState(false)
  async function search() {
    if (!query.trim()) return
    setLoading(true)
    const res  = await fetch("/api/search/ai", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ query }) })
    const data = await res.json()
    setSuggestions(data.suggestions || [])
    setLoading(false)
  }
  return (
    <div style={{maxWidth:"600px",margin:"0 auto"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>AI Search — CH-44</h1>
      <p style={{color:"#94a3b8",marginBottom:"20px",fontSize:"13px"}}>API key stays server-side. Returns structured suggestions. Try "phone" or "electronics".</p>
      <div style={{display:"flex",gap:"10px",marginBottom:"20px"}}>
        <input value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&search()} placeholder="Search products with AI..." style={{flex:1,padding:"12px",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",fontSize:"14px"}} />
        <button onClick={search} disabled={loading} style={{padding:"12px 20px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px"}}>
          {loading ? "..." : "Search"}
        </button>
      </div>
      {suggestions.length > 0 && (
        <div style={{background:"#1e293b",borderRadius:"8px",border:"1px solid #334155",overflow:"hidden"}}>
          {suggestions.map(s => (
            <a key={s.id} href={s.href} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 16px",borderBottom:"1px solid #334155",textDecoration:"none"}}>
              <span style={{color:"#f1f5f9"}}>{s.title}</span>
              <span style={{color:"#34d399",fontWeight:"bold"}}>${s.price}</span>
            </a>
          ))}
        </div>
      )}
      {!loading && query && suggestions.length === 0 && <p style={{color:"#64748b",textAlign:"center",padding:"20px"}}>No results for "{query}"</p>}
    </div>
  )
}
