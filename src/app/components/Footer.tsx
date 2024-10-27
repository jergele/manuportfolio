export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          © {currentYear} Manu Alastalo. Kaikki oikeudet pidätetään.
        </div>
        <div className="flex space-x-6">
          {/* Add your social media links here */}
          <a
            href="mailto:your.email@example.com"
            className="text-gray-600 hover:text-gray-900"
          >
            Ota yhteyttä
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}
