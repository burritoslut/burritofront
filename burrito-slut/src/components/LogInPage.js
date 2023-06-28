//LoginPage.js

import React, { useState } from 'react';
import api from '../api'; // adjust path based on your project structure

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post('/login', { email, password });

    if (response.data.success) {
      // Login was successful
      // Store the JWT in localStorage
      localStorage.setItem('token', response.data.token);
      console.log('Login successful');
    } else {
      // Login failed
      console.log('Login failed');
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;
