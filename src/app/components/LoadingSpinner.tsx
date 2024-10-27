export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-gray-300 border-t-gray-900 animate-spin"></div>
      </div>
    </div>
  );
}
