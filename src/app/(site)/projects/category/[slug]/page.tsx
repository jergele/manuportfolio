import { client } from "@/app/lib/sanity";
import ProjectGrid from "@/app/components/ProjectGrid";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { groq } from "next-sanity";
import { Project } from "@/app/types";

interface Props {
  params: { slug: string };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = params;

  const query = groq`
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
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
    const category = await client.fetch(query, { slug });

    if (!category) {
      return notFound();
    }

    const transformedProjects = category.projects.map((project: any) => ({
      ...project,
      year: String(project.year || "N/A"),
      slug: {
        current: project.slug,
      },
    }));

    return (
      <main className="pt-14 px-8">
        <h1 className="text-3xl ps-2 border-b border-gray-800 pb-2 text-gray-800">
          {category.title}
        </h1>
        <div className="mt-8">
          <ProjectGrid projects={transformedProjects} />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching category:", error);
    return notFound();
  }
}

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  try {
    const categories = await client.fetch<{ slug: string }[]>(groq`
      *[_type == "category"] {
        "slug": slug.current
      }
    `);

    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
