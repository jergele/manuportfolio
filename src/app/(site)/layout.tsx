import client from "../../lib/sanity.js";
import Sidebar from "../../app/components/Sidebar";
import LoadingSpinner from "../../app/components/LoadingSpinner";
import { Suspense } from "react";
import "../globals.css";

// Updated Props type for Next.js 15 layout
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
      <body>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar categories={categories} />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}
