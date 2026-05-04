// CH-43: Webhook Receiver + Event Log
import { NextRequest, NextResponse } from "next/server"

const MOCK_SECRET = "whsec_test_123"
const eventLog: { id:string; type:string; payload:unknown; timestamp:string }[] = []

export async function POST(req: NextRequest) {
  const signature = req.headers.get("x-webhook-secret")
  if (signature !== MOCK_SECRET) return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
  const payload = await req.json().catch(() => null)
  if (!payload) return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  const event = { id: Date.now().toString(), type: payload.type || "unknown", payload, timestamp: new Date().toISOString() }
  eventLog.push(event)
  console.log("[webhook]", event)
  return NextResponse.json({ received: true, id: event.id })
}

export async function GET() {
  return NextResponse.json(eventLog.slice(-20).reverse())
}
