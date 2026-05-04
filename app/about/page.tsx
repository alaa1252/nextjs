import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"
export const metadata: Metadata = { title: "About" }
export default function AboutPage() {
  return <div><Breadcrumb /><h1 style={{color:"#38bdf8"}}>About — CH-02</h1><p style={{color:"#94a3b8"}}>Static page example. File creates route /about automatically in App Router.</p></div>
}
