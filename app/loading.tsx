// CH-13: Loading UI
export default function Loading() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh",flexDirection:"column",gap:"16px"}}>
      <div style={{width:"40px",height:"40px",border:"4px solid #334155",borderTopColor:"#38bdf8",borderRadius:"50%",animation:"spin 0.8s linear infinite"}} />
      <p style={{color:"#94a3b8"}}>Loading...</p>
    </div>
  )
}
