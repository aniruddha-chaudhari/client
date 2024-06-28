import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/bars/sidebar';
import Navbar from './components/bars/navbar'
import Dashboard from './pages/dashboard'
import Analytics from './pages/analytics'
import Event from './pages/event'
import Signup from './pages/signup'
import Login from './pages/login';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './store/slices/authSlice';




const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      dispatch(getProfile());
    }
  }, [dispatch, user])

  if(!user){
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    )
  }
  return (
    <Router>
      <div className="App h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="ml-[64px] h-[calc(100%-72px)] overflow-y-auto">
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
             <Route exact path="/analytics" element={<Analytics />} />
             <Route exact path="/event" element={<Event />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  );
};

export default App;