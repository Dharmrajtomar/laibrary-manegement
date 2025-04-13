import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
