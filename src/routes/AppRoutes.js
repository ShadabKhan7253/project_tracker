import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectDetailsPage } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projectDetails" element={<ProjectDetailsPage />} />
    </Routes>
  );
};
