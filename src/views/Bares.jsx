import React, { Component } from 'react';
import Card from '../components/Card/Card.jsx';
import axios from 'axios';

export default class Bares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: []
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/Bares').then(res => {
      const bar = res.data;
      this.setState({ bar });
    });
  }

  render() {
    console.log(this.state);
    const BaresDados = this.state.bar ? this.state.bar : [];

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
