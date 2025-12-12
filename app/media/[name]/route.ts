import { NextRequest } from "next/server"
import fs from "node:fs"
import path from "node:path"

export const runtime = "nodejs"

function getFilePath(name: string) {
  const map: Record<string, string> = {
    wx: path.join(process.cwd(), "public", "images", "sponsor", "wx.png"),
    zfb: path.join(process.cwd(), "public", "images", "sponsor", "zfb.png"),
  }
  return map[name]
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params
  const filePath = getFilePath(name)
  if (!filePath || !fs.existsSync(filePath)) {
    return new Response("Not Found", { status: 404 })
  }
  const buf = await fs.promises.readFile(filePath)
  const ext = path.extname(filePath).toLowerCase()
  const type =
    ext === ".png"
      ? "image/png"
      : ext === ".jpg" || ext === ".jpeg"
      ? "image/jpeg"
      : ext === ".svg"
      ? "image/svg+xml"
      : "application/octet-stream"
  return new Response(buf, {
    headers: {
      "Content-Type": type,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
