// CH-45: Checkout – Shipping step
"use client"
import { useState } from "react"
import Link from "next/link"
export default function ShippingPage() {
  const [form, setForm] = useState({ name:"", address:"", city:"", method:"standard" })
  const [errors, setErrors] = useState<Record<string,string>>({})
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err: Record<string,string> = {}
    if (!form.name.trim())    err.name    = "Required"
    if (!form.address.trim()) err.address = "Required"
    if (!form.city.trim())    err.city    = "Required"
    setErrors(err)
    if (Object.keys(err).length === 0) window.location.href = "/checkout/confirmation"
  }
  const inp = (name: keyof typeof form, label: string) => (
    <div style={{marginBottom:"14px"}}>
      <label style={{color:"#94a3b8",fontSize:"13px",display:"block",marginBottom:"4px"}}>{label}</label>
      <input value={form[name]} onChange={e=>setForm(f=>({...f,[name]:e.target.value}))} style={{width:"100%",padding:"10px",background:"#0f172a",border:`1px solid ${errors[name]?"#ef4444":"#334155"}`,borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
      {errors[name] && <p style={{color:"#ef4444",fontSize:"12px",margin:"4px 0 0"}}>{errors[name]}</p>}
    </div>
  )
  return (
    <div style={{maxWidth:"500px",margin:"0 auto"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Shipping — CH-45 Step 2/3</h1>
      <div style={{display:"flex",gap:"8px",marginBottom:"20px",fontSize:"13px"}}>
        <Link href="/checkout/cart" style={{color:"#475569",textDecoration:"none"}}>1. Cart</Link>
        <span style={{color:"#38bdf8",fontWeight:"bold"}}>→ 2. Shipping</span>
        <span style={{color:"#475569"}}>→ 3. Confirmation</span>
      </div>
      <form onSubmit={handleSubmit} style={{background:"#1e293b",padding:"24px",borderRadius:"8px",border:"1px solid #334155"}}>
        {inp("name","Full Name")}{inp("address","Street Address")}{inp("city","City")}
        <div style={{marginBottom:"16px"}}>
          <label style={{color:"#94a3b8",fontSize:"13px",display:"block",marginBottom:"4px"}}>Shipping Method</label>
          <select value={form.method} onChange={e=>setForm(f=>({...f,method:e.target.value}))} style={{width:"100%",padding:"10px",background:"#0f172a",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}}>
            <option value="standard">Standard (Free, 5-7 days)</option>
            <option value="express">Express ($9.99, 2 days)</option>
          </select>
        </div>
        <button type="submit" style={{width:"100%",padding:"12px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"600"}}>Continue to Confirmation →</button>
      </form>
    </div>
  )
}
