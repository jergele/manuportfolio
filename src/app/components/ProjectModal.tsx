import { urlFor } from "@/app/lib/sanity";
import { X } from "lucide-react";
import { Project } from "../types";
import OptimizedImage from './OptimizedImage'


type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative bg-white rounded-lg w-full max-w-4xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="p-6 pt-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div className="flex gap-2 text-gray-600 mt-1">
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.category.title}</span>
              </div>
            </div>

            {project.description && (
              <p className="text-gray-700 mb-8">{project.description}</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images?.map((item, index) => (
                <div key={index} className="space-y-2">
                  <OptimizedImage
                    image={item.image}
                    alt={item.caption || `Image ${index + 1}`}
                    className="w-full rounded-lg"
                    // Higher quality for modal view
                    width={800}
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw"
                  />
                  {item.caption && (
                    <p className="text-sm text-gray-600">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<img
                    src={urlFor(item.image).width(800).quality(90).url()}
                    alt={item.caption}
                    className="w-full rounded-lg"
                  />
*/