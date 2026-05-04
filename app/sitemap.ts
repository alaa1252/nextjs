// CH-33: Sitemap
import { MetadataRoute } from "next"
import { products, posts } from "@/lib/data"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://next50.example.com"
  const staticRoutes = ["/","/about","/services","/blog","/products","/contact","/gallery","/portfolio"].map(p => ({ url:`${base}${p}`, lastModified:new Date(), changeFrequency:"weekly" as const, priority: p==="/"?1:0.8 }))
  const productRoutes = products.map(p => ({ url:`${base}/products/${p.slug}`, lastModified:new Date(), changeFrequency:"daily" as const, priority:0.9 }))
  const postRoutes    = posts.map(p    => ({ url:`${base}/blog/${p.slug}`,     lastModified:new Date(), changeFrequency:"weekly" as const, priority:0.7 }))
  return [...staticRoutes, ...productRoutes, ...postRoutes]
}
