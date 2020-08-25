import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>

      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa</p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            id="email" 
            type="email" 
            placeholder="ser melhor e-mail"
          />

          <button className="btn" type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
}

export default App;
