// CH-05 detail  |  CH-24: dynamic metadata
import { notFound } from "next/navigation"
import { posts } from "@/lib/data"
import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"
type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return { title: "Not Found" }
  return { title: post.title, description: post.excerpt }
}
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()
  return (
    <div style={{maxWidth:"700px",margin:"0 auto"}}>
      <Breadcrumb />
      <span style={{fontSize:"12px",color:"#38bdf8"}}>{post.category}</span>
      <h1 style={{color:"#f1f5f9",marginTop:"8px"}}>{post.title}</h1>
      <div style={{display:"flex",gap:"16px",color:"#64748b",fontSize:"13px",marginBottom:"24px"}}>
        <span>By {post.author}</span><span>{post.date}</span><span>{post.readingTime}</span>
      </div>
      <p style={{color:"#cbd5e1",lineHeight:1.8}}>{post.content}</p>
    </div>
  )
}
