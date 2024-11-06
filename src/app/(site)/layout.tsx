import client from "../../lib/sanity.js";
import Sidebar from "../../app/components/Sidebar";
import LoadingSpinner from "../../app/components/LoadingSpinner";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{}>;

async function getCategories() {
  const categories = await client.fetch(
    `*[_type == "category"] {
      _id,
      title,
      slug
    }`
  );
  return categories;
}

export default async function SiteLayout(props: {
  children: React.ReactNode;
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const categories = await getCategories();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar categories={categories} />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>{props.children}</Suspense>
      </main>
    </div>
  );
}
