import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Card from '../components/Card/Card.jsx';
import { Grid, Image } from 'semantic-ui-react';
import Carousel from 'semantic-ui-carousel-react';
import DadosBares from '../Dados/Bares.json';
import Coments from '../components/Coments/Coments.jsx';
import CardDescription from '../components/CardDescription/CardDescription.jsx';
import CuponModal from '../components/CuponModal/CuponModal';
import './cssglobal.css';
import Cardapio from 'components/Cardapio/Cardapio.jsx';

const elements = DadosBares[0].CarroselImages.map(imagemCarrosel => {
  return {
    render: () => <Image src={imagemCarrosel} />
  };
});

const sobre = 'Sobre o Bar';
const localizacao = 'Localização';

class BarProfile extends Component {
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <div>
          <h2>São Bartolomeu</h2>
          <i className='pe-7s-star' style={{ fontSize: '40px' }} />
          <i className='pe-7s-star' style={{ fontSize: '40px' }} />
          <i className='pe-7s-star' style={{ fontSize: '40px' }} />
        </div>
        <Carousel
          className='ui.card'
          elements={elements}
          duration={3000}
          animation='slide left'
          showNextPrev={false}
          showIndicators={true}
        />
        <Grid className='cardDescription'>
          <Grid.Column computer={8} mobile={16}>
            <CardDescription title={sobre} />
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <CardDescription title={localizacao} />
          </Grid.Column>
        </Grid>
        <h4>Cardápio</h4>
        <Cardapio />
        <CuponModal />
        <h4>Comentários</h4>
        <Coments />
      </div>
    );
  }
}

export default BarProfile;
