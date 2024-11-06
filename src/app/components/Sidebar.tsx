"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import type { Category } from "../types";

export default function Sidebar() {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await client.fetch<Category[]>(
        `*[_type == "category"] {
          _id,
          title,
          "slug": slug.current
        }`
      );
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[300px] border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex h-full flex-col justify-between">
        <div>
          <Link
            href="/"
            className="mb-8 block text-xl font-bold text-white"
            tabIndex={0}
          >
            Manu Alastalo
          </Link>

          <nav className="space-y-2">
            <Link
              href="/projects"
              className={`block rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-white${
                pathname === "/projects" ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
              tabIndex={0}
            >
              All Projects
            </Link>

            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/projects/category/${category.slug}`}
                className={`block rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-white ${
                  pathname === `/projects/category/${category.slug}`
                    ? "bg-gray-100 dark:bg-gray-800"
                    : ""
                }`}
                tabIndex={0}
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </div>

        <footer className="text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Manu Alastalo</p>
        </footer>
      </div>
    </aside>
  );
}
