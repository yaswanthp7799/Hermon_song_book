import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LyricsPage from './pages/LyricsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/lyrics/:id" element={<LyricsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
