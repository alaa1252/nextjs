// CH-45: Checkout – Confirmation step
import Link from "next/link"
export default function ConfirmationPage() {
  const orderId = "ORD-" + Math.random().toString(36).slice(2,8).toUpperCase()
  return (
    <div style={{maxWidth:"500px",margin:"60px auto",textAlign:"center"}}>
      <div style={{fontSize:"64px",marginBottom:"16px"}}>✅</div>
      <h1 style={{color:"#34d399",marginBottom:"8px"}}>Order Confirmed! — CH-45</h1>
      <p style={{color:"#94a3b8",marginBottom:"8px"}}>Thank you for your mock order.</p>
      <p style={{color:"#38bdf8",fontWeight:"bold",marginBottom:"24px"}}>Order ID: {orderId}</p>
      <p style={{color:"#64748b",fontSize:"13px",marginBottom:"24px"}}>This is a simulated checkout — no real payment was processed.</p>
      <Link href="/" style={{padding:"12px 28px",background:"#3b82f6",color:"white",borderRadius:"8px",textDecoration:"none",fontWeight:"600"}}>Back to Home</Link>
    </div>
  )
}
