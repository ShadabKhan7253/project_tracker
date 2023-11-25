import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectDetailsPage } from '../pages';

export const AppRoutes = ({ projects, onDeleteProject }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage projects={projects} onDeleteProject={onDeleteProject} />}
      />
      <Route path="/projectDetails" element={<ProjectDetailsPage />} />
    </Routes>
  );
};
