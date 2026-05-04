// CH-20: GET Route Handler
import { NextRequest, NextResponse } from "next/server"
import { products } from "@/lib/data"

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category")
  const q        = req.nextUrl.searchParams.get("q")?.toLowerCase()
  let result = [...products]
  if (category) result = result.filter(p => p.category === category)
  if (q)        result = result.filter(p => p.name.toLowerCase().includes(q))
  return NextResponse.json({ data: result, count: result.length })
}
