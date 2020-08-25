import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/sessions', { email });
    
    const { _id } = response.data;

    localStorage.setItem('user', _id);
  }
  return (
    <>
    <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa</p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL *</label>
      <input 
        id="email" 
        type="email" 
        placeholder="ser melhor e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button className="btn" type="submit">ENTRAR</button>
    </form>
    </>
  )
}