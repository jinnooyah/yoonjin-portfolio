import './App.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Samples from './pages/Samples';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AboutMe />} // <-- passed as JSX
        />
        <Route
          path="/samples"
          element={<Samples />} // <-- passed as JSX
        />
      </Routes>
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);