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
    <div className="flex min-h-screen">
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-10 overflow-y-auto">
        <nav className="sticky top-0">
          <Sidebar categories={categories} />
        </nav>
      </aside>
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </div>
      </main>
    </div>
  );
}
