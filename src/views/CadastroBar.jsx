import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

export default class CadastroBar extends Component {
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
          />
        </Form.Group>
        <Form.Checkbox label='Aceito os termos de serviço' />
      </Form>
    );
  }
}
