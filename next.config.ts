// CH-49 – CI / build config
import type { NextConfig } from "next"

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
  // CH-49: security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",   value: "nosniff"       },
          { key: "X-Frame-Options",           value: "DENY"          },
          { key: "Referrer-Policy",           value: "strict-origin" },
        ],
      },
    ]
  },
}

export default config
