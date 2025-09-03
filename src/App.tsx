// ...existing code...

import './App.css'

 import React from 'react';
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 import Home from './components/Home';
 import Contacts from './components/Contacts';
 
 const App: React.FC = () => {
   return (
     <Router>
       <nav className="p-4 flex gap-4">
         <Link to="/">Home</Link>
         <Link to="/contacts">Contacts</Link>
       </nav>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contacts" element={<Contacts />} />
       </Routes>
     </Router>
   );
};

export default App;

