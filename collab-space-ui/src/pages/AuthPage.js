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

  const handleSubmit = (e) => {
    
    
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
