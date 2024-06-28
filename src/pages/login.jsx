import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/slices/authSlice';
import img from '../assets/Default_A_modern_social_media_dashboard_site_illustration_rend_3.jpg'


const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = dispatch(login({ email, password }));
    if (resultAction.type === login.fulfilled.type) {
      navigate('/dashboard'); // Use navigate directly to change the route
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Holla, Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" type="password" id="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-rose-500 hover:underline">Forgot Password?</a>
          </div>
          <button disabled={loading} className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600">Sign In</button>
        </form>
        <p className="mt-6 text-center">
          Don’t have an account? <Link to="/signup" className="text-rose-500 hover:underline">Sign Up</Link>
        </p>
        </div>
        <div className='hidden md:block w-1/2'>
                    <img className='object-cover w-full h-full' src={img} alt="Dashboard illustration" />
                </div>
      </div>
    </div>
  );
};

export default Login;
