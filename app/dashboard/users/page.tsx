// CH-38: Role-Based Admin Area — admin-only page
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
export default async function UsersPage() {
  const jar  = await cookies()
  const role = jar.get("mock-role")?.value
  if (role !== "admin") redirect("/dashboard")
  const users = [
    { id:1, name:"Ali Ahmed",  email:"admin@test.com",  role:"admin"   },
    { id:2, name:"Sara Ali",   email:"sara@test.com",   role:"manager" },
    { id:3, name:"Mona Hassan",email:"mona@test.com",   role:"viewer"  },
  ]
  return (
    <div>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Users — CH-38 (Admin Only)</h1>
      <p style={{color:"#94a3b8",marginBottom:"20px",fontSize:"13px"}}>Middleware + server-side role check. Viewer/Manager roles are redirected away.</p>
      <div style={{background:"#1e293b",borderRadius:"8px",border:"1px solid #334155",overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 2fr 1fr",padding:"10px 16px",background:"#0f172a",fontSize:"12px",color:"#64748b",fontWeight:"bold"}}>
          <span>NAME</span><span>EMAIL</span><span>ROLE</span>
        </div>
        {users.map(u => (
          <div key={u.id} style={{display:"grid",gridTemplateColumns:"1fr 2fr 1fr",padding:"14px 16px",borderTop:"1px solid #334155"}}>
            <span style={{color:"#f1f5f9"}}>{u.name}</span>
            <span style={{color:"#94a3b8",fontSize:"13px"}}>{u.email}</span>
            <span style={{color: u.role==="admin"?"#ef4444":u.role==="manager"?"#f59e0b":"#94a3b8",fontSize:"12px"}}>{u.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
