import { client } from "@/app/lib/sanity";
import ProjectGrid from "@/app/components/ProjectGrid";
import { Suspense } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { groq } from "next-sanity";
import { Project } from "@/app/types";

export default async function ProjectsPage() {
  const query = groq`
    *[_type == "category"] {
      _id,
      title,
      "slug": slug.current,
      "projects": *[_type == "project" && references(^._id)] {
        _id,
        title,
        "slug": slug.current,
        mainImage,
        "year": coalesce(year, "N/A"),
        description,
        images,
        category->{
          _id,
          title,
          "slug": slug.current
        }
      }
    }
  `;

  try {
    const categories = await client.fetch(query);

    return (
      <main className="pt-14 px-12 space-y-16 pb-16">
        {categories.map((category: any) => (
          <section key={category._id} className="space-y-8">
            <h2 className="text-3xl ps-2 border-b border-gray-800 pb-2 text-gray-800">
              {category.title}
            </h2>
            <Suspense fallback={<LoadingSpinner />}>
              <ProjectGrid
                projects={category.projects.map((project: any) => ({
                  ...project,
                  year: String(project.year || "N/A"),
                  slug: {
                    current: project.slug,
                  },
                }))}
              />
            </Suspense>
          </section>
        ))}
      </main>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return (
      <div className="text-center py-10">
        <p>Error loading projects</p>
      </div>
    );
  }
}

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour
