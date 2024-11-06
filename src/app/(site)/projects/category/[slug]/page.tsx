import { client } from "../../../../lib/sanity";
import { Category, Project } from "../../../../../app/types";
import { Metadata } from "next";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{ slug: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const { slug } = params;

  const category = await client.fetch<Category>(
    `*[_type == "category" && slug.current == $slug][0]`
  );

  if (!category) {
    return null;
  }

  const projects = await client.fetch<Project[]>(
    `*[_type == "project" && category._ref == $categoryId] {
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
    }`,
    { categoryId: category._id }
  );

  return <div>{/* Your category page content */}</div>;
}

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  const category = await client.fetch<Category>(
    `*[_type == "category" && slug.current == $slug][0]`
  );

  return {
    title: category?.title || "Category Not Found",
    description: `Projects in ${category?.title || "this category"}`,
  };
}
