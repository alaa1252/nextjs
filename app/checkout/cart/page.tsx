// CH-45: Checkout – Cart step
"use client"
import { useState } from "react"
import Link from "next/link"
import { products } from "@/lib/data"
export default function CartPage() {
  const [cart, setCart] = useState([
    { ...products[0], qty:1 },
    { ...products[3], qty:2 },
  ])
  const total = cart.reduce((s,i)=>s+i.price*i.qty, 0)
  return (
    <div style={{maxWidth:"600px",margin:"0 auto"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Cart — CH-45 Step 1/3</h1>
      <div style={{display:"flex",gap:"8px",marginBottom:"20px",fontSize:"13px"}}>
        <span style={{color:"#38bdf8",fontWeight:"bold"}}>1. Cart</span>
        <span style={{color:"#475569"}}>→ 2. Shipping → 3. Confirmation</span>
      </div>
      {cart.map(item => (
        <div key={item.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px",background:"#1e293b",borderRadius:"8px",marginBottom:"10px",border:"1px solid #334155"}}>
          <span style={{color:"#f1f5f9"}}>{item.name}</span>
          <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
            <button onClick={()=>setCart(c=>c.map(i=>i.id===item.id&&i.qty>1?{...i,qty:i.qty-1}:i))} style={{width:"28px",height:"28px",background:"#334155",color:"#e2e8f0",border:"none",borderRadius:"4px",cursor:"pointer"}}>-</button>
            <span style={{color:"#e2e8f0",width:"20px",textAlign:"center"}}>{item.qty}</span>
            <button onClick={()=>setCart(c=>c.map(i=>i.id===item.id?{...i,qty:i.qty+1}:i))} style={{width:"28px",height:"28px",background:"#334155",color:"#e2e8f0",border:"none",borderRadius:"4px",cursor:"pointer"}}>+</button>
            <span style={{color:"#34d399",minWidth:"60px",textAlign:"right"}}>${item.price*item.qty}</span>
            <button onClick={()=>setCart(c=>c.filter(i=>i.id!==item.id))} style={{color:"#ef4444",background:"none",border:"none",cursor:"pointer",fontSize:"16px"}}>✕</button>
          </div>
        </div>
      ))}
      <div style={{padding:"16px",background:"#1e293b",borderRadius:"8px",border:"1px solid #334155",display:"flex",justifyContent:"space-between",marginBottom:"16px"}}>
        <strong style={{color:"#f1f5f9"}}>Total</strong>
        <strong style={{color:"#34d399",fontSize:"20px"}}>${total}</strong>
      </div>
      <Link href="/checkout/shipping" style={{display:"block",textAlign:"center",padding:"14px",background:"#3b82f6",color:"white",borderRadius:"8px",textDecoration:"none",fontWeight:"600",fontSize:"16px"}}>Proceed to Shipping →</Link>
    </div>
  )
}
