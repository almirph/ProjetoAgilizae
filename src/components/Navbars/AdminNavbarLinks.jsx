import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={3} href='#'>
            <i className='fa fa-search' />
            <p className='hidden-lg hidden-md'>Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight />
      </div>
    );
  }
}

export default AdminNavbarLinks;
