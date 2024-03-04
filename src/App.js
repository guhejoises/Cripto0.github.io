import React from 'react';
import HomePage from './routes/HomePage';
import CVPage from './routes/CVPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CV" element={<CVPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
