import "./globals.css";
import { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import LoadingSpinner from "./components/LoadingSpinner";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Manu Alastalo Portfolio",
  description: "Portfolio of Manu Alastalo - Artist & Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-gray-50">
        <div className="flex min-h-screen">
          <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-10 overflow-y-auto">
            <nav className="sticky top-0">
              <Sidebar />
            </nav>
          </aside>
          <main className="flex-1 ml-64">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
