import Image from "next/image"
import type { Metadata } from "next"
import { galleryImages } from "@/lib/data"
export const metadata: Metadata = { title: "Gallery" }
export default function GalleryPage() {
  return (
    <div>
      <h1 style={{color:"#38bdf8",marginBottom:"24px"}}>Optimized Image Gallery — CH-08</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"12px"}}>
        {galleryImages.map(img => (
          <div key={img.id} style={{borderRadius:"8px",overflow:"hidden",background:"#1e293b"}}>
            <Image src={img.src} alt={img.alt} width={600} height={400} sizes="(max-width:768px) 100vw, 33vw" style={{width:"100%",height:"180px",objectFit:"cover"}} />
          </div>
        ))}
      </div>
    </div>
  )
}
