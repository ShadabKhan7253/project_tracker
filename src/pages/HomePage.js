import { ProjectList } from '../components';

export const HomePage = ({
  projects,
  onDeleteProject,
  onUpdateProject,
  onStartTimer,
  onStopTimer,
}) => {
  return (
    <>
      <ProjectList
        projects={projects}
        onDeleteProject={onDeleteProject}
        onUpdateProject={onUpdateProject}
        onStartTimer={onStartTimer}
        onStopTimer={onStopTimer}
      />
    </>
  );
};
