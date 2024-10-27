import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto text-center py-20">
      <h2 className="text-3xl font-bold mb-4">Kategoriaa ei löytynyt</h2>
      <p className="text-gray-600 mb-8">Valitsemaasi kategoriaa ei löytynyt.</p>
      <Link
        href="/projects"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Palaa kaikkiin töihin
      </Link>
    </div>
  );
}
