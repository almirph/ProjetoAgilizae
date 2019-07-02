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
import CarouselProfile from 'components/CarouselProfile/CarouselProfile.jsx';
import { style } from 'variables/Variables.jsx';
import Axios from 'axios';

const elements = DadosBares[0].CarroselImages.map(imagemCarrosel => {
  return {
    render: () => <Image src={imagemCarrosel} />
  };
});

const sobre = 'Sobre o Bar';
const localizacao = 'Localização';

class BarProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: []
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;

    Axios.get(`http://localhost:3000/Bares/${id}`).then(res => {
      const bar = res.data;
      this.setState({ bar });
    });
  }

  render() {
    const bar = this.state.bar;

    return (
      <div style={{ padding: '50px' }}>
        <div>
          <h2>{bar.nome}</h2>
          <i className='pe-7s-star' style={{ fontSize: '40px' }} />
          <i className='pe-7s-star' style={{ fontSize: '40px' }} />
          <i className='pe-7s-star' style={{ fontSize: '40px' }} />
        </div>
        <Grid style={{ paddingTop: '10px' }}>
          <Grid.Column computer={3} mobile={0} />
          <Grid.Column computer={10} mobile={16}>
            <CarouselProfile images={bar.CarroselImages} />
          </Grid.Column>
          <Grid.Column computer={3} mobile={0} />
        </Grid>
        <Grid className='cardDescription'>
          <Grid.Column computer={8} mobile={16}>
            <CardDescription title={sobre} description={bar.descricao} />
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <CardDescription title={localizacao} description={bar.endereco} />
          </Grid.Column>
        </Grid>
        <h4>Cardápio</h4>
        <Cardapio />
        <CuponModal cuponList={bar.cupon} />
        <h4>Comentários</h4>
        <Coments comentList={bar.feedbacks} />
      </div>
    );
  }
}

export default BarProfile;
