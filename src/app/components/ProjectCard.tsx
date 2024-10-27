"use client";
import React from "react";
import { urlFor } from "@/app/lib/sanity";
import { Plus } from "lucide-react";
import { Project } from "../types";
import OptimizedImage from './OptimizedImage'


type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details of ${project.title}`}
      className="aspect-square overflow-hidden cursor-pointer group relative"
    >
      <div className="relative w-full h-full">
      <OptimizedImage
            image={project.mainImage}
            alt={project.title}
            className="object-cover w-full h-full"
            // Smaller size for card thumbnails
            width={600}
            quality={75}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
      
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          {/* Plus icon and project details container */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex flex-col items-center gap-2">
            <Plus size={32} strokeWidth={1.5} className="mb-2" />
            <p className="text-base font-light tracking-wide">{project.title}</p>
            <p className="text-sm font-light tracking-wide">{project.category.title}</p>
            <p className="text-sm font-light tracking-wide">{project.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
  <img
          src={urlFor(project.mainImage)
            .width(800)
            .height(800)
            .quality(90)
            .url()}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        /> 
*/
