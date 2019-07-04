import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <Grid fluid>
          
          <p className='copyright pull-right'>
            &copy; {new Date().getFullYear()}{' '}
            <Link to='http://localhost:3001/user/bares'>Agilizaê</Link>, feito
            com amor para boas notas
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
