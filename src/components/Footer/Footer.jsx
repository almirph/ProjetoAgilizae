import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <Grid fluid>
          <nav className='pull-left'>
            <ul>
              <li>
                <a href='#pablo'>Home</a>
              </li>
              <li>
                <a href='#pablo'>Contato</a>
              </li>
              <li>
                <a href='#pablo'>Privacidade</a>
              </li>
              <li>
                <a href='#pablo'>Termos</a>
              </li>
            </ul>
          </nav>
          <p className='copyright pull-right'>
            &copy; {new Date().getFullYear()}{' '}
            <a href='http://localhost:3001/user/bares'>Agilizaê</a>, feito com
            amor para boas notas
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
