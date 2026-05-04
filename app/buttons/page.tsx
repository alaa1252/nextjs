// CH-15: Reusable Button System  |  CH-14: Design Tokens  |  CH-16: Dark Mode
import Button from "@/components/Button"
import ThemeToggle from "@/components/ThemeToggle"
export default function ButtonsPage() {
  return (
    <div>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Button System — CH-15 + CH-14 + CH-16</h1>
      <p style={{color:"#94a3b8",marginBottom:"24px",fontSize:"13px"}}>Reusable buttons with variants (primary/secondary/outline/danger) and sizes (sm/md/lg).</p>
      <ThemeToggle />
      <h3 style={{color:"#cbd5e1",marginTop:"24px"}}>Variants</h3>
      <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"20px"}}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <h3 style={{color:"#cbd5e1"}}>Sizes</h3>
      <div style={{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center",marginBottom:"20px"}}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <h3 style={{color:"#cbd5e1"}}>CSS Variables (CH-14)</h3>
      <div style={{background:"#1e293b",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",color:"#94a3b8"}}>
        <p style={{margin:"4px 0"}}>--color-primary: #3b82f6</p>
        <p style={{margin:"4px 0"}}>--color-bg:      #0f172a</p>
        <p style={{margin:"4px 0"}}>--color-surface: #1e293b</p>
        <p style={{margin:"4px 0"}}>--color-accent:  #38bdf8</p>
      </div>
    </div>
  )
}
