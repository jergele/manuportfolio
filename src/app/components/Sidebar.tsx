"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Import icons for hamburger menu
import { Category } from "../types";

type Props = {
  categories: Category[];
};

export default function Sidebar({ categories }: Props) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button - moved to left */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md hover:bg-gray-100"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X size={24} className="text-gray-900" />
        ) : (
          <Menu size={24} className="text-gray-900" />
        )}
      </button>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav
        className={`
          fixed lg:static w-64 h-full bg-gray-50 z-40 transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          pt-12 px-12
        `}
      >
        <Link
          href="/"
          className={`block text-3xl font-light mb-12 transition-colors tracking-wide whitespace-nowrap ${
            pathname === "/" 
              ? "text-black" 
              : "text-gray-900 hover:text-black"
          }`}
          aria-label="Go to homepage"
          onClick={() => setIsMenuOpen(false)}
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
              onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                    onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
          >
            Ota yhteyttä
          </Link>
        </div>
      </nav>
    </>
  );
}
