import client from "../../lib/sanity.js";
import Sidebar from "../../app/components/Sidebar";
import LoadingSpinner from "../../app/components/LoadingSpinner";
import { Suspense } from "react";
import "../globals.css";

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
    <html lang="en">
      <head>
        <title>Manu Alastalo Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-50">
        <div className="min-h-screen flex">
          <aside className="w-64 min-h-screen">
            <Sidebar categories={categories} />
          </aside>
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto px-4 py-8">
              <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
