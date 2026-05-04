// CH-17: Mini Portfolio Page
import type { Metadata } from "next"
export const metadata: Metadata = { title: "Portfolio" }
const projects = [
  { id:1, name:"Share-Ride", tech:"Node.js + React Native + Socket.IO", desc:"Full ride-hailing SaaS platform with real-time tracking." },
  { id:2, name:"Tic-Tac-Toe AI", tech:"Java + Alpha-Beta Pruning", desc:"AI opponent with multiple difficulty levels." },
  { id:3, name:"Next50 Challenges", tech:"Next.js 15 + TypeScript", desc:"50 structured code challenges from beginner to advanced." },
]
const skills = ["TypeScript","Next.js","React","Node.js","MongoDB","Socket.IO","Tailwind","Docker"]
export default function PortfolioPage() {
  return (
    <div style={{maxWidth:"900px",margin:"0 auto"}}>
      {/* Hero */}
      <section style={{textAlign:"center",padding:"60px 20px",background:"linear-gradient(135deg,#1e293b,#0f172a)",borderRadius:"12px",marginBottom:"40px"}}>
        <h1 style={{color:"#38bdf8",fontSize:"clamp(28px,5vw,48px)",marginBottom:"12px"}}>Full-Stack Developer</h1>
        <p style={{color:"#94a3b8",fontSize:"18px",marginBottom:"24px"}}>Building production-grade apps with Next.js, React, and Node.js</p>
        <a href="/contact" style={{padding:"12px 28px",background:"#3b82f6",color:"white",borderRadius:"8px",textDecoration:"none",fontWeight:"600"}}>Get In Touch</a>
      </section>
      {/* Skills */}
      <section style={{marginBottom:"40px"}}>
        <h2 style={{color:"#38bdf8",marginBottom:"16px"}}>Skills</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
          {skills.map(s => <span key={s} style={{padding:"6px 14px",background:"#1e293b",color:"#38bdf8",borderRadius:"20px",fontSize:"13px",border:"1px solid #334155"}}>{s}</span>)}
        </div>
      </section>
      {/* Projects */}
      <section style={{marginBottom:"40px"}}>
        <h2 style={{color:"#38bdf8",marginBottom:"16px"}}>Projects</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"16px"}}>
          {projects.map(p => (
            <div key={p.id} style={{background:"#1e293b",padding:"20px",borderRadius:"8px",border:"1px solid #334155"}}>
              <h3 style={{color:"#f1f5f9",marginTop:0}}>{p.name}</h3>
              <p style={{color:"#38bdf8",fontSize:"12px",marginBottom:"8px"}}>{p.tech}</p>
              <p style={{color:"#94a3b8",fontSize:"14px",margin:0}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Contact CTA */}
      <section style={{textAlign:"center",padding:"40px",background:"#1e293b",borderRadius:"12px"}}>
        <h2 style={{color:"#f1f5f9"}}>Ready to work together?</h2>
        <a href="/contact" style={{padding:"12px 28px",background:"#3b82f6",color:"white",borderRadius:"8px",textDecoration:"none",fontWeight:"600"}}>Contact Me</a>
      </section>
    </div>
  )
}
