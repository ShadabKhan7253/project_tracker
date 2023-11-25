import React, { useState } from 'react';
import { ProjectList } from '../components';

const initialProjects = [
  {
    id: 1,
    name: 'Project 1',
    description:
      'Project 1 Description Project 1 Description Project 1 Description Project 1 Description',
    status: 'Ongoing',
    price: 45,
    elapsed: 46446737,
    runningSince: null,
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Project 2 Description Project 2 Description ',
    status: 'Ongoing',
    price: 55,
    elapsed: 46446737,
    runningSince: 1700488695674,
  },
];

export const HomePage = () => {
  const [projects, setProjects] = useState(initialProjects);
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
};
