import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export default class CuponModal extends Component {
  render() {
    const cuponList = this.props.cuponList ? this.props.cuponList : [];
    console.log('cupon', cuponList);
    return (
      <div style={{ paddingTop: '30px' }}>
        <Modal
          size='fullscreen'
          trigger={
            <Button secondary size='big'>
              Cupons!
            </Button>
          }
        >
          <Modal.Header>Selecione um cupon</Modal.Header>
          {cuponList.map(cupon => (
            <Modal.Content image>
              <Image wrapped size='medium' src={cupon.cuponImage} />
              <Modal.Description>
                <Header>{cupon.id}</Header>
                <p>{cupon.descricao}</p>
                <p>{cupon.condicoes}</p>
              </Modal.Description>
            </Modal.Content>
          ))}
        </Modal>
      </div>
    );
  }
}
