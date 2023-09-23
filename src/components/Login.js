import React, { useState } from 'react';
import './Login.css';

const  LoginPage =({setIsLoggedIn}) =>{
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    localStorage.setItem("loggedUser",JSON.stringify(username));
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-container">
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;