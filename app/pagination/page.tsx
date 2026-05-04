// CH-25: Pagination + Search Params
import Link from "next/link"
import { products } from "@/lib/data"
import type { Metadata } from "next"
export const metadata: Metadata = { title: "Pagination" }

const PER_PAGE = 2

export default async function PaginationPage({ searchParams }: { searchParams: Promise<{ page?: string; query?: string }> }) {
  const sp    = await searchParams
  const page  = Math.max(1, Number(sp.page  || 1))
  const query = (sp.query || "").toLowerCase()

  const filtered = products.filter(p => p.name.toLowerCase().includes(query))
  const total    = Math.ceil(filtered.length / PER_PAGE)
  const visible  = filtered.slice((page-1)*PER_PAGE, page*PER_PAGE)

  function pageHref(p: number) { return `/pagination?page=${p}&query=${encodeURIComponent(query)}` }

  return (
    <div style={{maxWidth:"600px",margin:"0 auto"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Pagination — CH-25</h1>
      <p style={{color:"#94a3b8",marginBottom:"16px",fontSize:"13px"}}>URL synced: ?page= and ?query= — browser back/forward preserves state.</p>

      <form style={{display:"flex",gap:"10px",marginBottom:"20px"}}>
        <input name="query" defaultValue={query} placeholder="Search..." style={{flex:1,padding:"8px 14px",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
        <button type="submit" style={{padding:"8px 18px",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Search</button>
      </form>

      {visible.map(p => (
        <div key={p.id} style={{padding:"14px",background:"#1e293b",borderRadius:"8px",marginBottom:"10px",border:"1px solid #334155"}}>
          <strong style={{color:"#f1f5f9"}}>{p.name}</strong>
          <span style={{color:"#34d399",marginLeft:"12px"}}>${p.price}</span>
        </div>
      ))}

      <div style={{display:"flex",gap:"8px",marginTop:"20px",alignItems:"center"}}>
        {page > 1     && <Link href={pageHref(page-1)} style={{padding:"8px 16px",background:"#1e293b",color:"#38bdf8",border:"1px solid #334155",borderRadius:"6px",textDecoration:"none"}}>← Prev</Link>}
        <span style={{color:"#94a3b8",fontSize:"14px"}}>Page {page} / {total}</span>
        {page < total && <Link href={pageHref(page+1)} style={{padding:"8px 16px",background:"#1e293b",color:"#38bdf8",border:"1px solid #334155",borderRadius:"6px",textDecoration:"none"}}>Next →</Link>}
      </div>
    </div>
  )
}
