import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const PaginaInicial = () => (
  <div>
    <h1 className="tittle_init">Escolha seu caminho em JavaScript</h1>

    <div className="conteudo-opcoes">
      <Link className="opcao-front-end" to='/front-end'>Front-End</Link>
      <Link className="opcao-back-end" to='/back-end'>back-End</Link>
    </div>
    
  </div>
);

export default PaginaInicial;