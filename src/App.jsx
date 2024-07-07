import React, { useState, useEffect, createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/bars/sidebar';
import Navbar from './components/bars/navbar';
import Dashboard from './pages/dashboard';
import Analytics from './pages/analytics';
import Event from './pages/event';
import Signup from './pages/signup';
import Login from './pages/login';
import axios from 'axios';

// Create an authentication context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [userId, setUserId] = useState(null);

  const login = (id) => {
    setIsAuthenticated(true);
    setUserId(id);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userId', id);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserId(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
const useAuth = () => useContext(AuthContext);

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, login } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dashboard', { withCredentials: true });
        if (response.status === 200 && response.data.userId) {
          login(response.data.userId);
        } else {
          throw new Error('Not authenticated');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        navigate('/', { replace: true, state: { from: location } });
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuthenticated) {
      checkAuth();
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, navigate, location, login]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : null;
};

// Layout component for protected routes
const ProtectedLayout = () => {
  return (
    <div className="App h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="ml-[64px] h-[calc(100%-72px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Modified Dashboard component
const EnhancedDashboard = () => {
  const { isAuthenticated, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dashboard', { withCredentials: true });
        if (response.status !== 200 || !response.data.userId) {
          throw new Error('Not authenticated');
        }
      } catch (error) {
        console.error('Dashboard auth check failed:', error);
        navigate('/', { replace: true });
      }
    };

    if (isAuthenticated) {
      checkAuth();
    }
  }, [isAuthenticated, navigate]);

  return <Dashboard userId={userId} />;
};



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            element={
              <ProtectedRoute>
                <ProtectedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<EnhancedDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/event" element={<Event />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;