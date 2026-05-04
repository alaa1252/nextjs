// CH-23: Task CRUD  |  CH-37: Server Actions  |  CH-39: Optimistic UI
"use client"
import { useOptimistic, useTransition } from "react"
import { createTask, toggleTask, deleteTask } from "@/lib/actions"
import { tasks as initialTasks } from "@/lib/data"

// Inner server-rendered list – we wrap in a client component for optimistic updates
export default function TasksPage() {
  return <TaskManager initialTasks={[...initialTasks]} />
}

function TaskManager({ initialTasks }: { initialTasks: typeof initialTasks }) {
  const [optimisticTasks, addOptimistic] = useOptimistic(initialTasks,
    (state, action: { type:string; id?:string; title?:string }) => {
      if (action.type === "add")    return [...state, { id:"temp-"+Date.now(), title: action.title!, done:false }]
      if (action.type === "toggle") return state.map(t => t.id === action.id ? {...t, done:!t.done} : t)
      if (action.type === "delete") return state.filter(t => t.id !== action.id)
      return state
    }
  )
  const [, startTransition] = useTransition()

  function handleCreate(fd: FormData) {
    const title = fd.get("title") as string
    if (!title?.trim()) return
    startTransition(async () => {
      addOptimistic({ type:"add", title })
      await createTask(fd)
    })
  }

  function handleToggle(id: string) {
    startTransition(async () => {
      addOptimistic({ type:"toggle", id })
      await toggleTask(id)
    })
  }

  function handleDelete(id: string) {
    startTransition(async () => {
      addOptimistic({ type:"delete", id })
      await deleteTask(id)
    })
  }

  return (
    <div style={{maxWidth:"600px"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"8px"}}>Tasks — CH-23, 37, 39</h1>
      <p style={{color:"#94a3b8",marginBottom:"20px",fontSize:"13px"}}>Server Actions + Optimistic UI with useOptimistic</p>

      <form action={handleCreate} style={{display:"flex",gap:"10px",marginBottom:"20px"}}>
        <input name="title" placeholder="New task title..." required style={{flex:1,padding:"10px",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",fontSize:"14px"}} />
        <button type="submit" style={{padding:"10px 20px",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Add</button>
      </form>

      {optimisticTasks.map(task => (
        <div key={task.id} style={{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",background:"#1e293b",borderRadius:"8px",marginBottom:"8px",border:"1px solid #334155",opacity:task.id.toString().startsWith("temp") ? 0.6 : 1}}>
          <input type="checkbox" checked={task.done} onChange={()=>handleToggle(task.id)} style={{width:"16px",height:"16px",cursor:"pointer"}} />
          <span style={{flex:1,color:"#e2e8f0",textDecoration:task.done?"line-through":"none",fontSize:"15px"}}>{task.title}</span>
          {task.id.toString().startsWith("temp") && <span style={{color:"#f59e0b",fontSize:"11px"}}>saving...</span>}
          <button onClick={()=>handleDelete(task.id)} style={{padding:"4px 10px",background:"#ef4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px"}}>Delete</button>
        </div>
      ))}
      {optimisticTasks.length === 0 && <p style={{color:"#64748b",textAlign:"center",padding:"20px"}}>No tasks yet.</p>}
    </div>
  )
}
