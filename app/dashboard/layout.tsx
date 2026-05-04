// CH-35: Admin Dashboard Layout  |  CH-38: Role-Based Access
import { cookies } from "next/headers"
import Link from "next/link"
import type { Metadata } from "next"
export const metadata: Metadata = { title: "Dashboard" }

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const jar      = await cookies()
  const role     = jar.get("mock-role")?.value || "viewer"
  const username = jar.get("mock-username")?.value || "User"

  const sideLinks = [
    { href:"/dashboard",       label:"Overview",  roles:["admin","manager","viewer"] },
    { href:"/dashboard/tasks", label:"Tasks",     roles:["admin","manager","viewer"] },
    { href:"/dashboard/users", label:"Users",     roles:["admin"]                    },
  ].filter(l => l.roles.includes(role))

  return (
    <div style={{display:"flex",gap:"0",minHeight:"calc(100vh - 80px)"}}>
      {/* Sidebar */}
      <aside style={{width:"200px",background:"#1e293b",padding:"20px 0",borderRight:"1px solid #334155",flexShrink:0}}>
        <div style={{padding:"0 16px 16px",borderBottom:"1px solid #334155",marginBottom:"16px"}}>
          <p style={{color:"#f1f5f9",fontWeight:"bold",margin:0}}>{username}</p>
          <p style={{color:"#38bdf8",fontSize:"12px",margin:"2px 0 0"}}>{role}</p>
        </div>
        {sideLinks.map(l => (
          <Link key={l.href} href={l.href} style={{display:"block",padding:"10px 16px",color:"#cbd5e1",textDecoration:"none",fontSize:"14px",borderLeft:"3px solid transparent"}}>
            {l.label}
          </Link>
        ))}
        <form action="/api/logout" style={{padding:"16px"}}>
          <Link href="/login" style={{display:"block",padding:"8px 12px",background:"#334155",color:"#94a3b8",borderRadius:"6px",textDecoration:"none",fontSize:"13px",textAlign:"center"}}>Logout</Link>
        </form>
      </aside>
      {/* Main */}
      <div style={{flex:1,padding:"24px"}}>{children}</div>
    </div>
  )
}
