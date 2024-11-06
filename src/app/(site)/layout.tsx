import client from "../../lib/sanity.js";
import Sidebar from "../../app/components/Sidebar";
import LoadingSpinner from "../../app/components/LoadingSpinner";
import { Suspense } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

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

export default async function SiteLayout({ children }: LayoutProps) {
  const categories = await getCategories();

  return (
    <div className="min-h-screen flex">
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10">
        <Sidebar categories={categories} />
      </aside>
      <main className="flex-1 ml-64">
        <div className="container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </div>
      </main>
    </div>
  );
}
