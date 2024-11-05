import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;

  const query = groq`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      year,
      description,
      category->,
      images[] {
        image,
        caption
      }
    }
  `;

  try {
    const project = await client.fetch(query, { slug });

    if (!project) {
      return notFound();
    }

    return (
      <main className="pt-14 px-8">
        <h1 className="text-3xl font-bold mb-8">{project.title}</h1>
        {/* Add your project detail layout here */}
      </main>
    );
  } catch (error) {
    console.error("Error fetching project:", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  const query = groq`*[_type == "project"] {
    "slug": slug.current
  }`;

  const projects = await client.fetch<{ slug: string }[]>(query);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
