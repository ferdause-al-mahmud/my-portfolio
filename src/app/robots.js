import { profile } from "@/data/profile";

// Served at /robots.txt
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}
