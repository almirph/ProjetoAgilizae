import React, { Component } from 'react';
import { Grid, Image, Button, Form } from 'semantic-ui-react';
import Coments from '../components/Coments/Coments.jsx';
import CardDescription from '../components/CardDescription/CardDescription.jsx';
import CuponModal from '../components/CuponModal/CuponModal';
import './cssglobal.css';
import Cardapio from 'components/Cardapio/Cardapio.jsx';
import CarouselProfile from 'components/CarouselProfile/CarouselProfile.jsx';
import Axios from 'axios';

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
        <div className='adicionarComent'>
          <h5>Adicionar comentário</h5>
          <Form style={{ padding: '10px' }}>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Email'
                placeholder='exemplo@email.com'
                size='big'
              />
              <Form.Input fluid label='Nome' placeholder='Nome' size='big' />
            </Form.Group>
            <Form.TextArea
              label='Sobre'
              placeholder='Sua opinião é importante'
            />
          </Form>
          <Button primary>Enviar</Button>
        </div>
      </div>
    );
  }
}

export default BarProfile;
