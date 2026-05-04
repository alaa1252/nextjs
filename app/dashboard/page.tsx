// CH-35: Dashboard stats cards  |  CH-38: role display
import { cookies } from "next/headers"
export default async function DashboardPage() {
  const jar  = await cookies()
  const role = jar.get("mock-role")?.value || "viewer"
  const stats = [
    { label:"Total Products", value:"6",  color:"#3b82f6" },
    { label:"Total Posts",    value:"6",  color:"#22c55e" },
    { label:"Active Tasks",   value:"2",  color:"#f59e0b" },
    { label:"Users",          value:"12", color:"#8b5cf6" },
  ]
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"}}>
        <h1 style={{color:"#38bdf8",margin:0}}>Dashboard Overview — CH-35</h1>
        <span style={{background:"#334155",color:"#38bdf8",padding:"4px 12px",borderRadius:"20px",fontSize:"12px"}}>Role: {role}</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:"16px",marginBottom:"32px"}}>
        {stats.map(s => (
          <div key={s.label} style={{background:"#1e293b",padding:"20px",borderRadius:"8px",borderLeft:`4px solid ${s.color}`}}>
            <p style={{color:"#94a3b8",margin:"0 0 4px",fontSize:"12px"}}>{s.label}</p>
            <p style={{color:s.color,margin:0,fontSize:"28px",fontWeight:"bold"}}>{s.value}</p>
          </div>
        ))}
      </div>
      {role === "admin" && <p style={{color:"#f59e0b",fontSize:"13px"}}>Admin: visit /dashboard/users to manage users.</p>}
    </div>
  )
}
