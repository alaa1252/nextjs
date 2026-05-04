// CH-26: Skeleton loader
export default function SkeletonCard() {
  return (
    <div style={{ border:"1px solid #334155", borderRadius:"8px", overflow:"hidden", background:"#1e293b", animation:"pulse 1.5s infinite" }}>
      <div style={{ background:"#334155", height:"180px" }} />
      <div style={{ padding:"12px" }}>
        <div style={{ background:"#334155", height:"12px", width:"60px", borderRadius:"4px", marginBottom:"8px" }} />
        <div style={{ background:"#334155", height:"16px", width:"80%", borderRadius:"4px", marginBottom:"6px" }} />
        <div style={{ background:"#334155", height:"14px", width:"40%", borderRadius:"4px", marginBottom:"8px" }} />
        <div style={{ background:"#334155", height:"32px", borderRadius:"6px" }} />
      </div>
    </div>
  )
}
