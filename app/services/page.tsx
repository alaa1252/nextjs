import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"
export const metadata: Metadata = { title: "Services" }
export default function ServicesPage() {
  return <div><Breadcrumb /><h1 style={{color:"#38bdf8"}}>Services — CH-02</h1><p style={{color:"#94a3b8"}}>Another static page. Each folder in /app becomes a route.</p></div>
}
