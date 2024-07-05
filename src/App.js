import './App.css';
import Navbar from './components/Navbar/Navbar';
import Design from './pages/Design';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
