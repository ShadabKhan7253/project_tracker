import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectDetailsPage } from '../pages';

export const AppRoutes = ({ projects, onDeleteProject, onUpdateProject }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            projects={projects}
            onDeleteProject={onDeleteProject}
            onUpdateProject={onUpdateProject}
          />
        }
      />
      <Route path="/projectDetails" element={<ProjectDetailsPage />} />
    </Routes>
  );
};
