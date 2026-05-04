// CH-05: Static Blog List  |  CH-09: metadata
import Link from "next/link"
import type { Metadata } from "next"
import { posts } from "@/lib/data"
export const metadata: Metadata = { title: "Blog", description: "All articles" }
export default function BlogPage() {
  return (
    <div>
      <h1 style={{color:"#38bdf8",marginBottom:"24px"}}>Blog — CH-05</h1>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        {posts.map(p => (
          <Link key={p.id} href={`/blog/${p.slug}`} style={{display:"block",padding:"20px",background:"#1e293b",borderRadius:"8px",border:"1px solid #334155",textDecoration:"none"}}>
            <div style={{display:"flex",gap:"8px",marginBottom:"8px"}}>
              <span style={{fontSize:"12px",color:"#38bdf8",background:"#0f172a",padding:"2px 8px",borderRadius:"4px"}}>{p.category}</span>
              <span style={{fontSize:"12px",color:"#94a3b8"}}>{p.readingTime}</span>
            </div>
            <h2 style={{color:"#f1f5f9",margin:"0 0 6px",fontSize:"18px"}}>{p.title}</h2>
            <p style={{color:"#94a3b8",margin:"0 0 8px",fontSize:"14px"}}>{p.excerpt}</p>
            <div style={{display:"flex",gap:"16px",fontSize:"12px",color:"#64748b"}}>
              <span>By {p.author}</span><span>{p.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
