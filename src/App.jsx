import React from 'react';
import Sidebar from './components/bars/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Navbar from './components/bars/navbar'


const App = () => {
  return (
    <Router>
      <div className="App">
      <Sidebar />
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;