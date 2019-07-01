import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class Cardapio extends Component {
  render() {
    return (
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell computer={10} mobile={16}>
                Produto
              </Table.HeaderCell>
              <Table.HeaderCell computer={6} />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Cerveja a</Table.Cell>
              <Table.Cell>R$10,00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cerveja b</Table.Cell>
              <Table.Cell>R$10,00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cerveja c</Table.Cell>
              <Table.Cell>R$10,00</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>Cerveja d</Table.HeaderCell>
              <Table.HeaderCell>R$10,00</Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}
