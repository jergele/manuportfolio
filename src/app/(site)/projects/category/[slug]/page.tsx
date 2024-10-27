import { client } from "@/app/lib/sanity";
import ProjectGrid from "@/app/components/ProjectGrid";
import { Project } from "@/app/types";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { use } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";

// Validate the slug parameter
function validateSlug(slug: string | undefined): slug is string {
  return typeof slug === 'string' && slug.length > 0;
}

// Fetch data component
async function CategoryContent({ slug }: { slug: string }) {
  try {
    const [projects, category] = await Promise.all([
      client.fetch(
        `*[_type == "project" && category->slug.current == $slug] {
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
        }`,
        { slug }
      ),
      client.fetch(
        `*[_type == "category" && slug.current == $slug][0] {
          _id,
          title,
          slug
        }`,
        { slug }
      ),
    ]);

    if (!category) return notFound();

    return (
      <div className="pt-14 px-8">
        <ProjectGrid projects={projects} />
      </div>
    );
  } catch (error) {
    console.error("Error in CategoryContent:", error);
    return notFound();
  }
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  
  if (!validateSlug(resolvedParams?.slug)) {
    return notFound();
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CategoryContent slug={resolvedParams.slug} />
    </Suspense>
  );
}

// Pre-fetch paths at build time
export async function generateStaticParams() {
  const categories = await client.fetch(`
    *[_type == "category"] {
      "slug": slug.current
    }
  `);

  return categories.map((category: { slug: string }) => ({
    slug: category.slug,
  }));
}
