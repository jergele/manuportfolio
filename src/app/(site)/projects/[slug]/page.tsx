import { Metadata } from "next";
import { client } from "../../../lib/sanity";
import { Project } from "../../../types";
import React from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{ slug: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
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

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await props.params;
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
