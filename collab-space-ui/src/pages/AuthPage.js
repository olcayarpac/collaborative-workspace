// AuthPage.jsx

import React, { useState } from 'react';
import '../styles/AuthPage.css';

const LoginForm = ({ onSubmit, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="button" type="submit">Login</button>
    </form>
  );
};

const SignupForm = ({ onSubmit, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="button" type="submit">Signup</button>
    </form>
  );
};

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (data) => {
    console.log('Logging in with:', data);
    // Implement login logic here
  };

  const handleSignup = (data) => {
    console.log('Signing up with:', data);
    // Implement signup logic here
  };

  const handleSwitch = (showLogin) => {
    setShowLogin(showLogin);
  }

  return (
    <div className="container">
      <div className="form-container">
        {showLogin ? (
          <LoginForm onSubmit={handleLogin} onSwitch={handleSwitch} />
        ) : (
          <SignupForm onSubmit={handleSignup} onSwitch={handleSwitch} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
