// AuthPage.jsx

import React, { useState } from 'react';
import '../styles/AuthPage.css';
import {
  RouterProvider,
  createBrowserRouter,
  redirect
} from "react-router-dom";

const LoginForm = ({ onSubmit, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch(apiUrl + '/login', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Request was successful, handle success
        redirect("/homepage");
        console.log('Login successful');
      } else {
        // Request failed, handle error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div >
      <h2>Login</h2>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onSwitch(false)}>Don't have account</button>
      <button className="button" type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};

const SignupForm = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch(apiUrl + '/signup', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Request was successful, handle success
        redirect("/homepage");
        console.log('Signup successful');
      } else {
        // Request failed, handle error
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };


  return (
    <div onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onSwitch(true)}>Already have account</button>
      <button className="button" type="submit" onClick={handleSubmit}>Signup</button>
    </div>
  );
};

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitch = (showLogin) => {
    setShowLogin(showLogin);
  }

  return (
    <div className="container">
      <div className="form-container">
        {showLogin ? (
          <LoginForm onSwitch={handleSwitch} />
        ) : (
          <SignupForm onSwitch={handleSwitch} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
