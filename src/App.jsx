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
        <div className='ml-[60px]'>
        <Routes >
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;