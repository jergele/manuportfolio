"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "../types";

type Props = {
  categories: Category[];
};

export default function Sidebar({ categories }: Props) {
  const pathname = usePathname();

  return (
    <nav className="w-64 pt-12 px-12">
      <Link
        href="/"
        className={`block text-3xl font-light mb-12 transition-colors tracking-wide whitespace-nowrap ${
          pathname === "/" 
            ? "text-black" 
            : "text-gray-900 hover:text-black"
        }`}
        aria-label="Go to homepage"
      >
        Manu Alastalo
      </Link>

      <div className="space-y-6 ml-4">
        <div>
          <Link
            href="/projects"
            className={`relative inline-block font-light text-base tracking-wide mb-4 ${
              pathname.startsWith("/projects")
                ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Taideprojektit
          </Link>
          <div className="pl-4 space-y-3">
            <Link
              href="/projects"
              className={`relative inline-block text-base font-light tracking-wide ${
                pathname === "/projects"
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Kaikki työt
            </Link>
            {categories.map((category) => {
              const categoryUrl = `/projects/category/${category.slug.current}`;
              return (
                <Link
                  key={category._id}
                  href={categoryUrl}
                  className={`relative inline-block text-base font-light tracking-wide ${
                    pathname === categoryUrl
                      ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {category.title}
                </Link>
              );
            })}
          </div>
        </div>
        <Link
          href="/about"
          className={`relative inline-block text-base font-light tracking-wide ${
            pathname === "/about"
              ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Tietoja minusta
        </Link>
        <Link
          href="/contact"
          className={`relative inline-block text-base font-light tracking-wide ${
            pathname === "/contact"
              ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Ota yhteyttä
        </Link>
      </div>
    </nav>
  );
}
