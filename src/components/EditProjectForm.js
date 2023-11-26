import React, { useEffect, useRef } from 'react';

export const EditProjectForm = ({ project, onUpdateProject }) => {
  const projectNameRef = useRef('');
  const projectDescriptionRef = useRef('');
  const pricePerHourRef = useRef('');
  const projectStatusRef = useRef('Ongoing');

  useEffect(() => {
    projectNameRef.current.value = project?.name ?? '';
    projectDescriptionRef.current.value = project?.description ?? '';
    pricePerHourRef.current.value = project?.price ?? '';
  }, [project]);

  const handleSubmit = () => {
    const projectDetails = {
      name: projectNameRef.current.value,
      description: projectDescriptionRef.current.value,
      price: pricePerHourRef.current.value,
      status: projectStatusRef.current.value,
    };
    onUpdateProject(project.id, projectDetails);
  };
  return (
    <div className="p-4 md:p-5">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="projectName"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your project name"
            ref={projectNameRef}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="projectDescription"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Description
          </label>
          <input
            type="text"
            id="projectDescription"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your project description"
            ref={projectDescriptionRef}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="pricePerHour"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price Per Hour
          </label>
          <input
            type="number"
            id="pricePerHour"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter price per hour"
            ref={pricePerHourRef}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="status"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Status
          </label>
          <select
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ref={projectStatusRef}
          >
            <option value="ongoing" defaultValue>
              Ongoing
            </option>
            <option value="complete">Complete</option>
          </select>
        </div>

        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={handleSubmit}
        >
          Update Project
        </button>
      </form>
    </div>
  );
};
