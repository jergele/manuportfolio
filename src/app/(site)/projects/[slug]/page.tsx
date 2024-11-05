import { Metadata } from "next";
import { client } from "@/app/lib/sanity";
import { Project } from "@/app/types";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;

  const project = await client.fetch<Project>(
    `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      description,
      year,
      "slug": slug.current,
      images[] {
        "image": image.asset->,
        caption
      },
      category->{
        title,
        "slug": slug.current
      }
    }
  `,
    { slug }
  );

  if (!project) {
    return null;
  }

  return <div>{/* Your project page content */}</div>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      title,
      description
    }
  `,
    { slug }
  );

  return {
    title: project?.title || "Project Not Found",
    description: project?.description || "Project details",
  };
}
