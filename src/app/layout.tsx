import "./globals.css";
import { Metadata } from "next";

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
      <body className="min-h-full bg-gray-50">{children}</body>
    </html>
  );
}
