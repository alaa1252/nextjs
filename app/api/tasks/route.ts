// CH-21: POST Route Handler + Validation
import { NextRequest, NextResponse } from "next/server"
import { tasks } from "@/lib/data"

export async function GET() {
  return NextResponse.json(tasks)
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body)              return NextResponse.json({ error: "Invalid JSON" },          { status: 400 })
  if (!body.title?.trim()) return NextResponse.json({ error: "Title is required" },    { status: 400 })
  if (body.title.length > 200) return NextResponse.json({ error: "Title too long" },  { status: 400 })
  const task = { id: Date.now().toString(), title: body.title.trim(), done: false }
  tasks.push(task)
  return NextResponse.json(task, { status: 201 })
}
