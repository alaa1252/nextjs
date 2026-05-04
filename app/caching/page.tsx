// CH-31: Caching and Revalidation Demo
import type { Metadata } from "next"
export const metadata: Metadata = { title: "Caching Demo" }

async function CachedPosts() {
  const res  = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", { cache: "force-cache" })
  const data = await res.json()
  return (
    <div>
      <h3 style={{color:"#22c55e"}}>Cached Posts (force-cache)</h3>
      {data.map((p: {id:number;title:string}) => <p key={p.id} style={{color:"#94a3b8",fontSize:"13px"}}>• {p.title}</p>)}
    </div>
  )
}

async function FreshPosts() {
  const res  = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3&_start=3", { next: { revalidate: 5 } })
  const data = await res.json()
  return (
    <div>
      <h3 style={{color:"#f59e0b"}}>Revalidated Posts (every 5s)</h3>
      {data.map((p: {id:number;title:string}) => <p key={p.id} style={{color:"#94a3b8",fontSize:"13px"}}>• {p.title}</p>)}
    </div>
  )
}

export default function CachingPage() {
  return (
    <div>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Caching Demo — CH-31</h1>
      <p style={{color:"#94a3b8",marginBottom:"24px",fontSize:"13px"}}>Compare force-cache vs ISR (revalidate: 5s).</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
        <div style={{background:"#1e293b",padding:"20px",borderRadius:"8px",border:"1px solid #334155"}}><CachedPosts /></div>
        <div style={{background:"#1e293b",padding:"20px",borderRadius:"8px",border:"1px solid #334155"}}><FreshPosts /></div>
      </div>
    </div>
  )
}
