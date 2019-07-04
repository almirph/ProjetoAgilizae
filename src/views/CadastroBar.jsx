import React, { Component } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

export default class CadastroBar extends Component {
  closeModal = () => {
    this.props.history.push('user/bares');
  };

  render() {
    return (
      <Form className='formBar'>
        <h4>Faça parte do nosso sistema!</h4>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Nome do Bar'
            placeholder='Nome do bar'
            size='big'
          />
          <Form.Input
            fluid
            label='CNPJ'
            placeholder='00.000.000/0000-00'
            size='big'
            type='number'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Email'
            placeholder='exemplo@email.com'
            size='big'
            type='email'
          />
          <Form.Input
            fluid
            label='Telefone'
            placeholder='(32) 0000-0000'
            size='big'
            type='number'
          />
          <Form.Input
            fluid
            label='CEP'
            placeholder='00000-000'
            size='big'
            type='number'
          />
        </Form.Group>
        <Form.TextArea
          label='Sobre'
          placeholder='Nos conte mais sobre o estabelecimento...'
        />
        <Form.Checkbox label='Aceito os termos de serviço' />

        <Modal
          size='fullscreen'
          trigger={<Button primary>Enviar</Button>}
          header='Muito Obrigado pelo cadastro!'
          content='Entraremos em contato para confirmar. Aguarde...'
          actions={[{ content: 'Feito', positive: true }]}
          onClose={this.closeModal}
        />
      </Form>
    );
  }
}
