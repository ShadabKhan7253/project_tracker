import React from 'react';

export const ProjectCard = ({ project, onDeleteProject }) => {
  const { id, name, description, price, status } = project;
  return (
    <div
      style={{ minWidth: '300px' }}
      className="min-w-lg max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="flex items-center  bg-purple-100 text-purple-800  text-sm font-medium  me-2 px-3 py-1.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
          {`$${price}`}
        </span>
      </div>

      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <p className=" font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <p className="text-center text-4xl p-5">10:35:20</p>
      <div className="flex flex-wrap justify-between">
        <div>
          {status === 'Ongoing' ? (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
              {status}
            </span>
          ) : (
            <span className=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              {status}
            </span>
          )}
        </div>

        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3.5 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => onDeleteProject(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3.5 py-3 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 512 512">
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
          </button>
        </div>
      </div>
      <button
        type="button"
        className="w-full mt-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        // onClick={handleSubmit}
      >
        Start Timer
      </button>
    </div>
  );
};
