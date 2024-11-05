"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    const currentPath = pathname?.replace("/manuportfolio", "") || "/";
    return currentPath === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-40 border-b">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex justify-between items-center h-14">
          <Link
            href="/"
            className={`text-lg font-semibold ${
              isActive("/")
                ? "text-gray-800"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Manu Alastalo
          </Link>
          <div className="flex gap-12">
            <Link
              href="/projects"
              className={`text-lg ${
                isActive("/projects")
                  ? "text-gray-800"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Työt
            </Link>
            {/* Remove or comment out these links
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
