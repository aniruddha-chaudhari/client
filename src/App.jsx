import React from 'react';
import Sidebar from './components/bars/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Navbar from './components/bars/navbar'

const App = () => {
  return (
    <Router>
      <div className="App h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="ml-[64px] h-[calc(100%-72px)] overflow-y-auto">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;