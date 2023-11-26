import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectDetailsPage } from '../pages';

export const AppRoutes = ({
  projects,
  onDeleteProject,
  onUpdateProject,
  onStartTimer,
  onStopTimer,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            projects={projects}
            onDeleteProject={onDeleteProject}
            onUpdateProject={onUpdateProject}
            onStartTimer={onStartTimer}
            onStopTimer={onStopTimer}
          />
        }
      />
      <Route path="/projectDetails" element={<ProjectDetailsPage />} />
    </Routes>
  );
};
