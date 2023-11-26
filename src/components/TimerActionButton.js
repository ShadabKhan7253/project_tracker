import React from 'react';

export const TimerActionButton = ({ id, status, runningSince, onStartTimer, onStopTimer }) => {
  if (status === 'completed') {
    return (
      <button
        type="button"
        className="w-full mt-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        // onClick={handleSubmit}
      >
        Start Timer
      </button>
    );
  }
  if (runningSince) {
    return (
      <button
        type="button"
        className="w-full mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => onStopTimer(id)}
      >
        Stop Timer
      </button>
    );
  }
  return (
    <button
      type="button"
      className="w-full mt-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      onClick={() => onStartTimer(id)}
    >
      Start Timer
    </button>
  );
};
