// CH-33: Robots
import { MetadataRoute } from "next"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent:"*", allow:"/", disallow:["/dashboard/","/api/","/login"] },
    ],
    sitemap: "https://next50.example.com/sitemap.xml",
  }
}
