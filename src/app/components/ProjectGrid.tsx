"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "../types";

type Props = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 font-light">Ei projekteja tässä kategoriassa.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[85%] mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
