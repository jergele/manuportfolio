"use client";

import { Project } from "../types";
import OptimizedImage from "./OptimizedImage";
import { useState, useEffect, useCallback } from "react";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects = [] }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle ESC key press
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSelectedProject(null);
    }
  }, []);

  // Handle click outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const modal = document.querySelector(".modal-content");
    if (modal && !modal.contains(event.target as Node)) {
      setSelectedProject(null);
    }
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling of the background when modal is open
      document.body.style.overflow = "hidden";
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, handleKeyDown, handleClickOutside]);

  if (!projects?.length) {
    return (
      <div className="text-center py-10">
        <p>No projects found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <button
            onClick={() => setSelectedProject(project)}
            key={project._id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-left w-full max-w-[300px] mx-auto"
            aria-label={`View ${project.title} project details`}
          >
            <div className="aspect-square relative">
              {project.mainImage && (
                <OptimizedImage
                  image={project.mainImage}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 h-full w-full"
                  priority
                  isCard={true}
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/80 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900/60 backdrop-blur-sm p-4 transition-all duration-300 group-hover:bg-gray-900/70">
              <h2 className="text-white text-lg font-semibold mb-1">
                {project.title}
              </h2>
              {project.year && (
                <p className="text-gray-200 text-sm">{project.year}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-content bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2
                    id="modal-title"
                    className="text-2xl font-bold text-gray-800"
                  >
                    {selectedProject.title}
                  </h2>
                  {selectedProject.year && (
                    <p className="text-gray-600 mt-1">{selectedProject.year}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Description */}
              {selectedProject.description && (
                <p className="text-gray-600 mb-6 text-lg">
                  {selectedProject.description}
                </p>
              )}

              {/* Gallery grid */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedProject.images.map((img, index) => (
                    <div key={index} className="space-y-3">
                      <div className="relative w-full">
                        <OptimizedImage
                          image={img.image}
                          alt={img.caption || `Gallery image ${index + 1}`}
                          className="w-full"
                          width={1200}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {img.caption && (
                        <p className="text-sm text-gray-600 px-1">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">
                  No gallery images available
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
