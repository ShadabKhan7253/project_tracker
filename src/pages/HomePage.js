import { ProjectList } from '../components';

export const HomePage = ({ projects, onDeleteProject, onUpdateProject }) => {
  return (
    <>
      <ProjectList
        projects={projects}
        onDeleteProject={onDeleteProject}
        onUpdateProject={onUpdateProject}
      />
    </>
  );
};
