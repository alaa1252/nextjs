"use server"
// CH-22: Server Action form  |  CH-23: Task CRUD  |  CH-37: Dashboard CRUD  |  CH-39: Optimistic UI

import { revalidatePath } from "next/cache"
import { tasks } from "./data"
import { redirect } from "next/navigation"

// ── CH-22: Newsletter form ─────────────────────────────────────────────────
export async function subscribeAction(prev: { msg: string }, fd: FormData) {
  const email = fd.get("email") as string
  if (!email || !email.includes("@")) return { msg: "Invalid email address" }
  await new Promise(r => setTimeout(r, 500))   // simulate delay
  return { msg: `Subscribed: ${email}` }
}

// ── CH-23 / CH-37: Task CRUD ───────────────────────────────────────────────
export async function createTask(fd: FormData) {
  const title = (fd.get("title") as string)?.trim()
  if (!title) return
  tasks.push({ id: Date.now().toString(), title, done: false })
  revalidatePath("/dashboard/tasks")
}

export async function toggleTask(id: string) {
  const task = tasks.find(t => t.id === id)
  if (task) task.done = !task.done
  revalidatePath("/dashboard/tasks")
}

export async function deleteTask(id: string) {
  const idx = tasks.findIndex(t => t.id === id)
  if (idx !== -1) tasks.splice(idx, 1)
  revalidatePath("/dashboard/tasks")
}

export async function updateTask(id: string, title: string) {
  const task = tasks.find(t => t.id === id)
  if (task) task.title = title
  revalidatePath("/dashboard/tasks")
}

// ── CH-29: mock login / logout ─────────────────────────────────────────────
import { cookies } from "next/headers"

export async function loginAction(fd: FormData) {
  const email = fd.get("email") as string
  const password = fd.get("password") as string
  if (email && password) {
    const jar = await cookies()
    jar.set("mock-token",    "valid-token",             { maxAge: 3600 })
    jar.set("mock-role",     email.includes("admin") ? "admin" : "viewer", { maxAge: 3600 })
    jar.set("mock-username", email.split("@")[0],       { maxAge: 3600 })
  }
  redirect("/dashboard")
}

export async function logoutAction() {
  const jar = await cookies()
  jar.delete("mock-token")
  jar.delete("mock-role")
  jar.delete("mock-username")
  redirect("/login")
}
