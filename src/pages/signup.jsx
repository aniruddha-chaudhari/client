import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Username</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border rounded" type="password" id="password" placeholder="Password" />
          </div>
          <button className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600">Sign Up</button>
        </form>
        <p className="mt-6 text-center">
          Already have an account? <Link to="/login
          " className="text-rose-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
