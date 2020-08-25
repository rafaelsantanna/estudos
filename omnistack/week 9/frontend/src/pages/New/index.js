import React, { useState, useMemo } from 'react';

import './styles.css';

import camera from '../../assets/camera.svg';

export default function New() {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  });

  function handleSubmit() {

  }
  return (
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail? 'has-thumbail' : ''}
      >
        <input type="file" onChange={e =>  setThumbnail(e.target.files[0])} />
        <img src={camera} alt="Select img"/>
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input 
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={e => setCompany(e.target.value)}

      />

      <label htmlFor="company">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
      <input 
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <label htmlFor="company">VALOR DA DIÁRIA * <span>em branco para GRATUITO</span></label>
      <input 
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <button className="btn" type="submit">Cadastrar</button>
    </form>
  )
}