import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export default class CuponModal extends Component {
  render() {
    return (
      <div style={{ paddingTop: '30px' }}>
        <Modal
          trigger={
            <Button secondary size='big'>
              Cupons!
            </Button>
          }
        >
          <Modal.Header>Selecione um cupon</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='https://cdn.awsli.com.br/600x450/129/129579/produto/31598361/b334cb1545.jpg'
            />
            <Modal.Description>
              <Header>Cupon Litrão Skol</Header>
              <p>20% na compra de litrão de skol</p>
              <p>Somente de terça-feira à quinta-feira até as 22h</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
