import { client } from "@/app/lib/sanity";
import ProjectGrid from "@/app/components/ProjectGrid";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Suspense } from "react";

async function getProjects() {
  const projects = await client.fetch(
    `*[_type == "project"] {
      _id,
      title,
      slug,
      mainImage,
      year,
      description,
      category->{
        _id,
        title,
        slug
      },
      images[] {
        image,
        caption
      }
    }`
  );
  return projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-14 px-8">
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectGrid projects={projects} />
      </Suspense>
    </div>
  );
}
