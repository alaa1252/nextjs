// CH-06: Dynamic route  |  CH-24: generateMetadata
import { notFound } from "next/navigation"
import Image from "next/image"
import { products } from "@/lib/data"
import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"

type Props = { params: Promise<{ slug: string }> }

// CH-24: dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) return { title: "Not Found" }
  return {
    title:       product.name,
    description: `${product.name} — $${product.price} — ${product.category}`,
    openGraph:   { title: product.name, description: `Buy ${product.name} for $${product.price}`, images: [product.image] },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) notFound()                        // CH-06: not-found handling
  return (
    <div>
      <Breadcrumb />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",flexWrap:"wrap"}}>
        <Image src={product.image} alt={product.name} width={600} height={400} style={{width:"100%",borderRadius:"8px",objectFit:"cover"}} />
        <div>
          <span style={{color:"#38bdf8",fontSize:"13px"}}>{product.category}</span>
          <h1 style={{color:"#f1f5f9",marginTop:"8px"}}>{product.name}</h1>
          <p style={{color:"#34d399",fontSize:"28px",fontWeight:"bold"}}>${product.price}</p>
          <p style={{color:"#fbbf24"}}>★ {product.rating} / 5</p>
          <p style={{color: product.available ? "#34d399" : "#ef4444"}}>
            {product.available ? `In Stock (${product.stock} left)` : "Out of Stock"}
          </p>
          <button style={{marginTop:"16px",padding:"12px 28px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px"}}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
