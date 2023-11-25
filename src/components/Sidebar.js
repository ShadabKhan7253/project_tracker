import React from 'react';
import { EditableProjectForm } from './EditableProjectForm';

export const Sidebar = ({ onSidebarVisible, isSidebarVisible }) => {
  return (
    <>
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={onSidebarVisible}
      >
        Add Project
      </button>
      <EditableProjectForm
        isSidebarVisible={isSidebarVisible}
        onSidebarVisible={onSidebarVisible}
      />
    </>
  );
};
