import ProjectsShowcase from "@/components/ProjectsShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tinashe Makamure",
  description: "Portfolio of completed projects in AI, Cloud, and Software Engineering",
};

export default function ProjectsPage() {
  return <ProjectsShowcase />;
}
