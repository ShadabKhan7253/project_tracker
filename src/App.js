import { useEffect, useState } from 'react';
import { Footer, Header } from './components';
import { AppRoutes } from './routes/AppRoutes';
import { v1 as uuidv4 } from 'uuid';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleSideBar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleAddProject = (project) => {
    const projectToBeAdded = { ...project, id: uuidv4(), elapsed: 0, runningSince: null };
    setProjects([...projects, projectToBeAdded]);
  };

  const handleDeleteProject = (projectId) => {
    const updateProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updateProjects);
  };

  return (
    <>
      <Header
        onSidebarVisible={handleSideBar}
        isSidebarVisible={isSidebarVisible}
        onAddProject={handleAddProject}
      />
      <AppRoutes projects={projects} onDeleteProject={handleDeleteProject} />
      <Footer />
    </>
  );
}

export default App;
