import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectList = ({ projects, onDeleteProject }) => {
  return (
    <main>
      <div className="flex flex-wrap ml-10 gap-x-10 gap-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onDeleteProject={onDeleteProject} />
        ))}
      </div>
    </main>
  );
};
