// CH-01: home page — navigation hub for all 50 challenges
import Link from "next/link"
import type { Metadata } from "next"
import { cookies } from "next/headers"

export const metadata: Metadata = { title: "Home" }

const challenges = [
  // Beginner
  { id:"01", label:"Create Next.js App",          href:"/",              level:"B" },
  { id:"02", label:"Static Pages + Navigation",   href:"/about",         level:"B" },
  { id:"03", label:"Responsive Hero Section",     href:"/hero",          level:"B" },
  { id:"04", label:"Reusable Product Card",        href:"/products",      level:"B" },
  { id:"05", label:"Static Blog List",             href:"/blog",          level:"B" },
  { id:"06", label:"Dynamic Product Route",        href:"/products/phone",level:"B" },
  { id:"07", label:"Active Nav + Breadcrumb",      href:"/about",         level:"B" },
  { id:"08", label:"Optimized Image Gallery",      href:"/gallery",       level:"B" },
  { id:"09", label:"Page Metadata Basics",         href:"/blog",          level:"B" },
  { id:"10", label:"Interactive Counter",          href:"/counter",       level:"B" },
  { id:"11", label:"Search + Filter Products",     href:"/products",      level:"B" },
  { id:"12", label:"Contact Form Validation",      href:"/contact",       level:"B" },
  { id:"13", label:"Loading + Not Found UI",       href:"/products",      level:"B" },
  { id:"14", label:"Local Font + Design Tokens",   href:"/buttons",       level:"B" },
  { id:"15", label:"Reusable Button System",       href:"/buttons",       level:"B" },
  { id:"16", label:"Dark Mode Toggle",             href:"/",              level:"B" },
  { id:"17", label:"Mini Portfolio Page",          href:"/portfolio",     level:"B" },
  { id:"18", label:"First Production Deployment",  href:"/",              level:"B" },
  // Intermediate
  { id:"19", label:"Server Component Data Fetch",  href:"/posts",         level:"I" },
  { id:"20", label:"GET Route Handler",            href:"/api/products",  level:"I" },
  { id:"21", label:"POST Route Handler + Validation",href:"/api/tasks",   level:"I" },
  { id:"22", label:"Server Action Form",           href:"/contact",       level:"I" },
  { id:"23", label:"Task CRUD",                    href:"/dashboard/tasks",level:"I" },
  { id:"24", label:"Dynamic Metadata",             href:"/products/laptop",level:"I" },
  { id:"25", label:"Pagination + Search Params",   href:"/pagination",    level:"I" },
  { id:"26", label:"Suspense + Skeleton",          href:"/posts",         level:"I" },
  { id:"27", label:"Error Boundary per Route",     href:"/dashboard",     level:"I" },
  { id:"28", label:"Mock Auth Navbar",             href:"/login",         level:"I" },
  { id:"29", label:"Protected Dashboard",          href:"/dashboard",     level:"I" },
  { id:"30", label:"File Upload UI + API",         href:"/upload",        level:"I" },
  { id:"31", label:"Caching + Revalidation",       href:"/caching",       level:"I" },
  { id:"32", label:"Arabic/English Routes",        href:"/en",            level:"I" },
  { id:"33", label:"Sitemap + Robots",             href:"/sitemap.xml",   level:"I" },
  { id:"34", label:"PWA Manifest",                 href:"/manifest.webmanifest",level:"I" },
  { id:"35", label:"Admin Dashboard Layout",       href:"/dashboard",     level:"I" },
  { id:"36", label:"Production Readiness",         href:"/",              level:"I" },
  // Advanced
  { id:"37", label:"Server Actions CRUD Dashboard",href:"/dashboard/tasks",level:"A" },
  { id:"38", label:"Role-Based Admin Area",        href:"/dashboard",     level:"A" },
  { id:"39", label:"Optimistic UI",                href:"/dashboard/tasks",level:"A" },
  { id:"40", label:"Streaming Product Page",       href:"/streaming",     level:"A" },
  { id:"41", label:"Lighthouse Performance Budget",href:"/products",      level:"A" },
  { id:"42", label:"Catalog Image Optimization",   href:"/products",      level:"A" },
  { id:"43", label:"Webhook Receiver + Event Log", href:"/webhook-log",   level:"A" },
  { id:"44", label:"AI Search Assistant Route",    href:"/search-ai",     level:"A" },
  { id:"45", label:"Checkout Flow Mock",           href:"/checkout/cart", level:"A" },
  { id:"46", label:"Multi-Tenant Store Routing",   href:"/stores/store-a",level:"A" },
  { id:"47", label:"Edge Middleware A/B Test",     href:"/",              level:"A" },
  { id:"48", label:"Unit + E2E Testing Setup",     href:"/",              level:"A" },
  { id:"49", label:"GitHub Actions CI",            href:"/",              level:"A" },
  { id:"50", label:"Production Observability",     href:"/observability", level:"A" },
]

const colors = { B:"#22c55e", I:"#f59e0b", A:"#ef4444" }

export default async function HomePage() {
  const jar     = await cookies()
  const variant = jar.get("ab-variant")?.value   // CH-47 A/B test

  return (
    <div>
      <div style={{ textAlign:"center", marginBottom:"32px" }}>
        <h1 style={{ color:"#38bdf8", marginBottom:"8px" }}>Next.js 50 Code Challenges</h1>
        <p style={{ color:"#94a3b8" }}>Beginner → Intermediate → Advanced</p>
        {/* CH-47: show different CTA based on A/B variant */}
        <p style={{ color:"#fbbf24", fontSize:"13px", marginTop:"4px" }}>
          A/B variant: <strong>{variant || "?"}</strong> — {variant === "A" ? "Start Learning →" : "Explore Challenges ↓"}
        </p>
      </div>

      {/* CH-16: theme toggle lives in Navbar; here just show it */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"12px" }}>
        {challenges.map(c => (
          <Link key={c.id} href={c.href} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"12px 16px", background:"#1e293b", border:"1px solid #334155", borderRadius:"8px", textDecoration:"none", color:"#e2e8f0", transition:"border-color 0.15s" }}>
            <span style={{ background:"#0f172a", color:"#38bdf8", fontWeight:"bold", fontSize:"13px", padding:"2px 8px", borderRadius:"4px", minWidth:"36px", textAlign:"center" }}>
              {c.id}
            </span>
            <span style={{ flex:1, fontSize:"14px" }}>{c.label}</span>
            <span style={{ fontSize:"11px", color: colors[c.level as keyof typeof colors], background:"#0f172a", padding:"2px 6px", borderRadius:"4px" }}>
              {c.level}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
