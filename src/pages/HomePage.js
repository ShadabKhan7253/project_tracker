import { ProjectList } from '../components';

export const HomePage = ({ projects }) => {
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
};
