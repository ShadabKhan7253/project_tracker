import { useState } from 'react';
import { Footer, Header } from './components';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSideBar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Header onSidebarVisible={handleSideBar} isSidebarVisible={isSidebarVisible} />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
