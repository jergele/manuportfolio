import { client } from "../lib/sanity";
import ProjectGrid from "../components/ProjectGrid";
import { groq } from "next-sanity";
import { Category, Project } from "../../types/index.js";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{}>;

export default async function ProjectsPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  // First fetch all categories
  const categoriesQuery = groq`
    *[_type == "category"] {
      _id,
      title,
      "slug": slug.current
    }
  `;

  // Then fetch all projects
  const projectsQuery = groq`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      mainImage,
      "slug": slug.current,
      year,
      description,
      images,
      category->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `;

  const [categories, allProjects] = await Promise.all([
    client.fetch<Category[]>(categoriesQuery),
    client.fetch<Project[]>(projectsQuery),
  ]);

  // Group projects by category
  const projectsByCategory = categories.map((category: Category) => ({
    ...category,
    projects: allProjects.filter(
      (project: Project) => project.category?._id === category._id
    ),
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">All Projects</h1>

      {projectsByCategory.map((category) => (
        <div key={category._id} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            {category.title}
          </h2>
          {category.projects.length > 0 ? (
            <ProjectGrid projects={category.projects} />
          ) : (
            <p className="text-gray-500 italic">
              No projects in this category yet.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
