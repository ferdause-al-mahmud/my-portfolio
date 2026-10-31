import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

// Served at /sitemap.xml so search engines find every project page
export default function sitemap() {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${profile.siteUrl}/project/${project.id}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
