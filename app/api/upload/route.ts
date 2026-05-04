// CH-30: File Upload API Contract
import { NextRequest, NextResponse } from "next/server"

const ALLOWED_TYPES = ["image/jpeg","image/png","image/webp","image/gif"]
const MAX_SIZE_MB   = 5

export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null)
  if (!form) return NextResponse.json({ error: "No form data" }, { status: 400 })

  const file = form.get("file") as File | null
  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  if (!ALLOWED_TYPES.includes(file.type)) return NextResponse.json({ error: `Invalid type. Allowed: ${ALLOWED_TYPES.join(", ")}` }, { status: 400 })
  if (file.size > MAX_SIZE_MB * 1024 * 1024) return NextResponse.json({ error: `File too large. Max ${MAX_SIZE_MB}MB` }, { status: 400 })

  // In production: upload to S3/Cloudinary here
  return NextResponse.json({ success: true, name: file.name, size: file.size, type: file.type })
}
