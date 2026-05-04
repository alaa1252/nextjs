// CH-04: Reusable Product Card  |  CH-11: Search + Filter  |  CH-41/42: image opt
"use client"
import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import { products } from "@/lib/data"

export default function ProductsPage() {
  const [query, setQuery]    = useState("")
  const [cat,   setCat]      = useState("All")
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))]
  const filtered = products
    .filter(p => cat === "All" || p.category === cat)
    .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <div>
      <h1 style={{color:"#38bdf8",marginBottom:"20px"}}>Products — CH-04, 11, 41, 42</h1>
      <div style={{display:"flex",gap:"10px",marginBottom:"20px",flexWrap:"wrap"}}>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." style={{padding:"8px 14px",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"14px",flex:1,minWidth:"180px"}} />
        <select value={cat} onChange={e=>setCat(e.target.value)} style={{padding:"8px 14px",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"14px"}}>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      {filtered.length === 0
        ? <p style={{color:"#94a3b8",textAlign:"center",padding:"40px"}}>No products found.</p>
        : <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"16px"}}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
      }
    </div>
  )
}
