import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectDetailsPage } from '../pages';

export const AppRoutes = ({ projects }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage projects={projects} />} />
      <Route path="/projectDetails" element={<ProjectDetailsPage />} />
    </Routes>
  );
};
