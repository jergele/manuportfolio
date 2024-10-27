import ProjectGrid from "@/app/components/ProjectGrid";
import { client } from "@/app/lib/sanity";

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

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <div className="pt-14 px-8">
      <ProjectGrid projects={projects} />
    </div>
  );
}
