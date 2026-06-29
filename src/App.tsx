import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MediumCircularRevealHeadingDemo } from './components/demo';
import { CatalogPage } from './components/CatalogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
