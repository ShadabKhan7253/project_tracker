import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { EditModal } from './EditModal';

export const ProjectList = ({ projects, onDeleteProject, onUpdateProject }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [projectToBeUpdated, setProjectToBeUpdated] = useState(null);

  const handleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEditProject = (id) => {
    handleEditModal();
    projects.forEach((project) => {
      if (project.id === id) {
        setProjectToBeUpdated(project);
      }
    });
  };

  const handleUpdateProject = (id, projectDetails) => {
    onUpdateProject(id, projectDetails);
    handleEditModal();
  };

  return (
    <main>
      <div className="flex flex-wrap ml-10 gap-x-10 gap-y-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDeleteProject={onDeleteProject}
            handleEditModal={handleEditModal}
            onEditClick={handleEditProject}
          />
        ))}
      </div>
      <EditModal
        project={projectToBeUpdated}
        isEditModalOpen={isEditModalOpen}
        handleEditModal={handleEditModal}
        onUpdateProject={handleUpdateProject}
      />
    </main>
  );
};
