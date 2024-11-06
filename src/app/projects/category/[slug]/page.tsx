import { client } from "../../../lib/sanity";
import ProjectGrid from "../../../components/ProjectGrid";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

// Updated Props type for Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CategoryPage(props: Props) {
  // Await the params
  const { slug } = await props.params;

  const query = groq`
    *[_type == "project" && category->slug.current == $slug] | order(_createdAt desc) {
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

  const projects = await client.fetch(query, { slug });

  if (!projects || projects.length === 0) {
    notFound();
  }

  // Get category title
  const categoryQuery = groq`
    *[_type == "category" && slug.current == $slug][0] {
      title
    }
  `;
  const category = await client.fetch(categoryQuery, { slug });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {category?.title || "Category"}
      </h1>
      <ProjectGrid projects={projects} />
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  const query = groq`
    *[_type == "category"] {
      "slug": slug.current
    }
  `;

  const categories = await client.fetch(query);
  return categories.map((category: { slug: string }) => ({
    slug: category.slug,
  }));
}
