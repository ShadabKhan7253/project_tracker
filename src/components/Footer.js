import React from 'react';

export const Footer = () => {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-50 border-t border-gray-200 shadow  md:p-6 dark:bg-gray-800 dark:border-gray-600 text-center">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{' '}
        <a href="https://flowbite.com/" class="hover:underline">
          Project Tracker
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
