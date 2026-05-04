// CH-19: Server Component Data Fetching  |  CH-26: Suspense + Skeleton
import { Suspense } from "react"
import SkeletonCard from "@/components/SkeletonCard"
import type { Metadata } from "next"
export const metadata: Metadata = { title: "Posts" }

async function PostList() {
  // CH-31: fetch with cache/revalidate
  const res  = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", { next: { revalidate: 60 } })
  const data = await res.json()
  return (
    <div>
      {data.map((p: { id:number; title:string; body:string }) => (
        <div key={p.id} style={{padding:"16px",background:"#1e293b",borderRadius:"8px",marginBottom:"12px",border:"1px solid #334155"}}>
          <h3 style={{color:"#f1f5f9",margin:"0 0 6px",fontSize:"15px"}}>{p.title}</h3>
          <p style={{color:"#94a3b8",margin:0,fontSize:"13px"}}>{p.body}</p>
        </div>
      ))}
    </div>
  )
}

function SkeletonList() {
  return <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>{Array.from({length:5}).map((_,i)=><SkeletonCard key={i} />)}</div>
}

export default function PostsPage() {
  return (
    <div>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Posts — CH-19 + CH-26</h1>
      <p style={{color:"#94a3b8",marginBottom:"20px",fontSize:"13px"}}>Data fetched in a Server Component. Suspense shows skeleton while streaming.</p>
      <Suspense fallback={<SkeletonList />}>
        <PostList />
      </Suspense>
    </div>
  )
}
