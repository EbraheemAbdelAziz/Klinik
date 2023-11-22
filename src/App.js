import { Outlet } from 'react-router-dom';
import './App.css';
import HomePaage from './pages/Home/HomePage';
import NavBar from './pages/Home/componants/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
