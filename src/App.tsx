
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';

import { Button } from './components/reusable';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="p-4 flex gap-4">
        <Link to="/">Home</Link>
         <Button text="Shop Collection" onClick={() => alert('Button clicked!')} />
        <Link to="/contacts">Contacts</Link>
    <Button text="Add to Cart" onClick={() => alert('Button clicked!')} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;

