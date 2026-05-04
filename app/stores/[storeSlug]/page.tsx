// CH-46: Multi-Tenant Store Routing
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const tenants: Record<string, { name:string; primary:string; bg:string; products:string[] }> = {
  "store-a": { name:"TechHub",    primary:"#3b82f6", bg:"#0f172a", products:["Laptop Pro","Smart Watch","Wireless Buds"] },
  "store-b": { name:"FashionCo",  primary:"#ec4899", bg:"#1a0b1a", products:["Running Shoes","Leather Bag","Sunglasses"]   },
  "store-c": { name:"GreenShop",  primary:"#22c55e", bg:"#0a1a0a", products:["Organic Tea","Bamboo Notebook","Eco Mug"]    },
}

type Props = { params: Promise<{ storeSlug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { storeSlug } = await params
  const tenant = tenants[storeSlug]
  return { title: tenant ? `${tenant.name} Store` : "Store Not Found" }
}

export default async function StorePage({ params }: Props) {
  const { storeSlug } = await params
  const tenant = tenants[storeSlug]
  if (!tenant) notFound()
  return (
    <div style={{minHeight:"60vh",background:tenant.bg,borderRadius:"12px",padding:"40px",textAlign:"center"}}>
      <h1 style={{color:tenant.primary,fontSize:"clamp(28px,5vw,48px)",marginBottom:"8px"}}>{tenant.name}</h1>
      <p style={{color:"#94a3b8",marginBottom:"32px"}}>Tenant: <strong style={{color:tenant.primary}}>{storeSlug}</strong> — CH-46 Multi-Tenant Routing</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"16px",maxWidth:"700px",margin:"0 auto"}}>
        {tenant.products.map(p => (
          <div key={p} style={{background:"rgba(255,255,255,0.05)",padding:"20px",borderRadius:"8px",border:`1px solid ${tenant.primary}44`}}>
            <p style={{color:"#f1f5f9",margin:0,fontWeight:"500"}}>{p}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:"32px",display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap"}}>
        {Object.keys(tenants).map(slug => (
          <a key={slug} href={`/stores/${slug}`} style={{padding:"8px 16px",background:tenants[slug].primary+"22",color:tenants[slug].primary,border:`1px solid ${tenants[slug].primary}`,borderRadius:"6px",textDecoration:"none",fontSize:"13px",fontWeight: slug===storeSlug?"bold":"normal"}}>
            {tenants[slug].name}
          </a>
        ))}
      </div>
    </div>
  )
}
