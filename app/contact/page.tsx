// CH-12: Contact Form UI Validation  |  CH-22: Server Action
"use client"
import { useState, useActionState } from "react"
import { subscribeAction } from "@/lib/actions"
import type { Metadata } from "next"

export default function ContactPage() {
  const [form,    setForm]    = useState({ name:"", email:"", subject:"", message:"" })
  const [errors,  setErrors]  = useState<Record<string,string>>({})
  const [success, setSuccess] = useState(false)

  // CH-22: Server Action newsletter
  const [actionState, formAction, pending] = useActionState(subscribeAction, { msg:"" })

  function validate() {
    const e: Record<string,string> = {}
    if (!form.name.trim())         e.name    = "Name is required"
    if (!form.email.includes("@")) e.email   = "Invalid email address"
    if (!form.subject.trim())      e.subject = "Subject is required"
    if (form.message.length < 10)  e.message = "Message must be at least 10 characters"
    return e
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) setSuccess(true)
  }

  if (success) return <div style={{textAlign:"center",padding:"40px"}}><h2 style={{color:"#34d399"}}>Message sent!</h2><p style={{color:"#94a3b8"}}>We will get back to you soon.</p><button onClick={()=>setSuccess(false)} style={{padding:"10px 24px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"}}>Send another</button></div>

  const field = (name: keyof typeof form, label: string, type="text") => (
    <div style={{marginBottom:"16px"}}>
      <label style={{display:"block",color:"#94a3b8",fontSize:"13px",marginBottom:"4px"}}>{label}</label>
      {name === "message"
        ? <textarea value={form[name]} onChange={e=>setForm(f=>({...f,[name]:e.target.value}))} rows={4} style={{width:"100%",padding:"10px",background:"#1e293b",border:`1px solid ${errors[name]?"#ef4444":"#334155"}`,borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
        : <input type={type} value={form[name]} onChange={e=>setForm(f=>({...f,[name]:e.target.value}))} style={{width:"100%",padding:"10px",background:"#1e293b",border:`1px solid ${errors[name]?"#ef4444":"#334155"}`,borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
      }
      {errors[name] && <p style={{color:"#ef4444",fontSize:"12px",margin:"4px 0 0"}}>{errors[name]}</p>}
    </div>
  )

  return (
    <div style={{maxWidth:"560px",margin:"0 auto"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Contact — CH-12 + CH-22</h1>

      <form onSubmit={handleSubmit} style={{background:"#1e293b",padding:"24px",borderRadius:"8px",marginBottom:"24px"}}>
        {field("name",    "Name")}
        {field("email",   "Email", "email")}
        {field("subject", "Subject")}
        {field("message", "Message")}
        <button type="submit" style={{width:"100%",padding:"12px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"600"}}>Send Message</button>
      </form>

      {/* CH-22: Server Action newsletter form */}
      <div style={{background:"#1e293b",padding:"20px",borderRadius:"8px"}}>
        <h3 style={{color:"#38bdf8",margin:"0 0 12px"}}>Newsletter (Server Action)</h3>
        <form action={formAction} style={{display:"flex",gap:"10px"}}>
          <input name="email" type="email" placeholder="your@email.com" required style={{flex:1,padding:"10px",background:"#0f172a",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
          <button type="submit" disabled={pending} style={{padding:"10px 20px",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>{pending ? "..." : "Subscribe"}</button>
        </form>
        {actionState.msg && <p style={{color:"#34d399",fontSize:"13px",marginTop:"8px"}}>{actionState.msg}</p>}
      </div>
    </div>
  )
}
