import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  const handleClick = (event: any) => {
    event.target.style.opacity = '0.0';
  }


  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <div className="row">
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
          </div>
          <div className="row">
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
          </div>
          <div className="row">
            <div className = "cont">
              <div className = "cover"></div>
            <button onClick={handleClick} className="col"></button>
            <button className="secretButton" type="submit">Enter</button>
            </div>
            
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
          </div>
          <div className="row">
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
            <button onClick={handleClick} className="col"></button>
          </div>
          
          
        </form>
      )}
    </div>
  );
};

export default App;
