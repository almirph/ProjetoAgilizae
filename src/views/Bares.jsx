import React, { Component } from 'react';
import Card from '../components/Card/Card.jsx';
import BaresDados from '../Dados/Bares.json';

export default class Bares extends Component {
  render() {
    return (
      <div style={{ padding: '50px' }}>
        {BaresDados.map(bar => (
          <Card
            key={bar.id}
            id={bar.id}
            title={bar.nome}
            category={bar.descricao}
            imagem={bar.imagem}
          />
        ))}
      </div>
    );
  }
}
