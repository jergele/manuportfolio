import { Project } from "@/app/types";
import { Metadata } from "next";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{}>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  return <div>{/* Your projects page content */}</div>;
}

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  return {
    title: "Projects",
    description: "Browse all projects",
  };
}
