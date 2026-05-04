// CH-30: File Upload UI + API Contract
"use client"
import { useState, useRef } from "react"
export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null)
  const [status,  setStatus]  = useState("")
  const [error,   setError]   = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const ALLOWED = ["image/jpeg","image/png","image/webp","image/gif"]
  const MAX_MB  = 5

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    setStatus(""); setError("")
    if (!file) return
    if (!ALLOWED.includes(file.type)) { setError(`Invalid type. Allowed: ${ALLOWED.map(t=>t.split("/")[1]).join(", ")}`); return }
    if (file.size > MAX_MB * 1024 * 1024) { setError(`File too large. Max ${MAX_MB}MB`); return }
    setPreview(URL.createObjectURL(file))
  }

  async function handleSubmit() {
    const file = inputRef.current?.files?.[0]
    if (!file || error) return
    const fd = new FormData()
    fd.append("file", file)
    setStatus("Uploading...")
    const res  = await fetch("/api/upload", { method:"POST", body:fd })
    const data = await res.json()
    setStatus(res.ok ? `Uploaded: ${data.name} (${(data.size/1024).toFixed(1)}KB)` : data.error)
  }

  return (
    <div style={{maxWidth:"500px",margin:"0 auto"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>File Upload — CH-30</h1>
      <p style={{color:"#94a3b8",marginBottom:"20px",fontSize:"13px"}}>Client validates type/size before sending. API contract documented below.</p>
      <div style={{background:"#1e293b",padding:"24px",borderRadius:"8px",border:"2px dashed #334155",textAlign:"center",marginBottom:"16px"}}>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} style={{display:"none"}} id="file-input" />
        <label htmlFor="file-input" style={{cursor:"pointer",color:"#38bdf8",fontSize:"14px"}}>Click to select image</label>
        {preview && <img src={preview} alt="preview" style={{display:"block",maxWidth:"100%",maxHeight:"200px",margin:"12px auto",borderRadius:"6px"}} />}
      </div>
      {error  && <p style={{color:"#ef4444",fontSize:"13px",marginBottom:"8px"}}>{error}</p>}
      {status && <p style={{color:"#34d399",fontSize:"13px",marginBottom:"8px"}}>{status}</p>}
      <button onClick={handleSubmit} disabled={!!error || !preview} style={{width:"100%",padding:"12px",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",opacity:(!preview||!!error)?0.4:1}}>
        Upload
      </button>
      <div style={{marginTop:"20px",background:"#1e293b",padding:"16px",borderRadius:"8px",fontSize:"12px",color:"#94a3b8",fontFamily:"monospace"}}>
        <p style={{color:"#38bdf8",marginTop:0}}>API Contract — POST /api/upload</p>
        <p>Allowed types: jpeg, png, webp, gif</p>
        <p>Max size: 5MB</p>
        <p>Success 200: {"{ success: true, name, size, type }"}</p>
        <p>Error 400:   {"{ error: string }"}</p>
      </div>
    </div>
  )
}
