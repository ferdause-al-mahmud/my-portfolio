import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/data/projects";

// Pre-render every project page at build time; unknown ids return 404
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

// Per-project title, description and link-preview image
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  const title = project.role
    ? `${project.projectName} — ${project.role}`
    : project.projectName;

  return {
    title,
    description: project.longDescription,
    alternates: { canonical: `/project/${project.id}` },
    openGraph: {
      title,
      description: project.description,
      url: `/project/${project.id}`,
      images: [
        { url: project.src.src, alt: `${project.projectName} screenshot` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [project.src.src],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) notFound();

  return <ProjectDetails project={projects[index]} index={index} />;
}
