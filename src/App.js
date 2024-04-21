import './App.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Vocals from './pages/Vocals.js';
import Mixes from './pages/Mixes';
import Comms from './pages/Comms';
import VHarmGuides from './pages/VHarmGuides.js';

export default function App() {
  return (
    <BrowserRouter basename="/yoonjin-portfolio">
      <Routes>
        <Route
          path="/"
          exact element={<AboutMe />} // <-- passed as JSX
        />
        <Route
          path="/vocals"
          element={<Vocals />}
        />
        <Route
          path="/harmguides"
          element={<VHarmGuides />}
        />
        <Route
          path="/mixes"
          element={<Mixes />} // <-- passed as JSX
        />
        <Route
          path="/comms"
          element={<Comms />} // <-- passed as JSX
        />
      </Routes>
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);