// CH-04: Reusable Product Card
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border:"1px solid #334155", borderRadius:"8px", overflow:"hidden", background:"#1e293b" }}>
      <Image src={product.image} alt={product.name} width={400} height={250} style={{ width:"100%", height:"180px", objectFit:"cover" }} />
      <div style={{ padding:"12px" }}>
        <span style={{ fontSize:"11px", color:"#38bdf8", background:"#0f172a", padding:"2px 8px", borderRadius:"4px" }}>{product.category}</span>
        <h3 style={{ margin:"8px 0 4px", color:"#e2e8f0", fontSize:"16px" }}>{product.name}</h3>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ color:"#34d399", fontWeight:"bold", fontSize:"18px" }}>${product.price}</span>
          <span style={{ color:"#fbbf24", fontSize:"13px" }}>★ {product.rating}</span>
        </div>
        <p style={{ color: product.available ? "#34d399" : "#ef4444", fontSize:"12px", margin:"4px 0 8px" }}>
          {product.available ? `In Stock (${product.stock})` : "Out of Stock"}
        </p>
        <Link href={`/products/${product.slug}`} style={{ display:"block", textAlign:"center", background:"#3b82f6", color:"white", padding:"8px", borderRadius:"6px", textDecoration:"none", fontSize:"14px" }}>
          View Details
        </Link>
      </div>
    </div>
  )
}
