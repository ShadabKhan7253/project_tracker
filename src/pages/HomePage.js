import { ProjectList } from '../components';

export const HomePage = ({ projects, onDeleteProject }) => {
  return (
    <>
      <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
    </>
  );
};
