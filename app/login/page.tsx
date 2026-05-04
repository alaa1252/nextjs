// CH-28: Mock Auth Navbar  |  CH-29: Protected Route (middleware redirects here)
import { loginAction } from "@/lib/actions"
import type { Metadata } from "next"
export const metadata: Metadata = { title: "Login" }
export default function LoginPage() {
  return (
    <div style={{maxWidth:"400px",margin:"60px auto",padding:"32px",background:"#1e293b",borderRadius:"12px",border:"1px solid #334155"}}>
      <h1 style={{color:"#38bdf8",textAlign:"center",marginBottom:"8px"}}>Login — CH-28, 29</h1>
      <p style={{color:"#94a3b8",textAlign:"center",fontSize:"13px",marginBottom:"24px"}}>
        Use <strong style={{color:"#38bdf8"}}>admin@test.com</strong> for admin role, any other email for viewer.
      </p>
      <form action={loginAction} style={{display:"flex",flexDirection:"column",gap:"14px"}}>
        <div>
          <label style={{color:"#94a3b8",fontSize:"13px",display:"block",marginBottom:"4px"}}>Email</label>
          <input name="email" type="email" required defaultValue="admin@test.com" style={{width:"100%",padding:"10px",background:"#0f172a",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
        </div>
        <div>
          <label style={{color:"#94a3b8",fontSize:"13px",display:"block",marginBottom:"4px"}}>Password</label>
          <input name="password" type="password" required defaultValue="password" style={{width:"100%",padding:"10px",background:"#0f172a",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
        </div>
        <button type="submit" style={{padding:"12px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"600",marginTop:"4px"}}>
          Sign In
        </button>
      </form>
    </div>
  )
}
