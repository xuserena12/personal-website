import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Design from './pages/Design';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/design" element={<Design />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
