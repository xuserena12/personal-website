import './App.css';
import Navbar from './components/Navbar/Navbar';
import Design from './pages/Design';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
