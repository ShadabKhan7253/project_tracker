import React from 'react';

export const EditableProjectForm = () => {
  return (
    <>
      <div className=" absolute top-0 right-0 w-1/3 h-[100%] bg-white">
        <div className="flex justify-between m-4">
          <h2 className="text-xl  text-center pl-5">Add Projects</h2>
          <button
            type="button"
            className="  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Close
          </button>
        </div>

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
              placeholder="Enter your project description"
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
          >
            Add Project
          </button>
        </form>
      </div>
    </>
  );
};
