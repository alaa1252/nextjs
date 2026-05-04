// CH-44: AI Search Assistant Route (mock — API key stays server-side)
import { NextRequest, NextResponse } from "next/server"
import { products } from "@/lib/data"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body?.query) return NextResponse.json({ error: "query required" }, { status: 400 })

  const q = body.query.toLowerCase()
  // Mock AI: return matching products as structured suggestions
  const suggestions = products
    .filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    .map(p => ({ id: p.id, title: p.name, price: p.price, href: `/products/${p.slug}` }))

  return NextResponse.json({ query: body.query, suggestions, source: "mock" })
}
