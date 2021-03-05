import React from 'react'
import { Nav } from 'react-bootstrap'

import Navbar from 'react-bootstrap/Navbar'

import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <Navbar expand='lg' className='header__navbar' variant='dark'>
        <div className='header__logo'>
          <Navbar.Brand href='#' className='header__brand'>
            JDDW
          </Navbar.Brand>
        </div>

        <div className='header__nav ml-auto'>
          <Navbar.Toggle
            className='header__nav-toggle'
            aria-controls='jddw-navbar'
          />

          <Navbar.Collapse id='jddw-navbar'>
            <Nav className=''>
              <Nav.Link className='header__nav-link is-active' href='#'>
                Accueil
              </Nav.Link>
              <Nav.Link className='header__nav-link' href='#'>
                À propos
              </Nav.Link>
              <Nav.Link className='header__nav-link' href='#'>
                Services
              </Nav.Link>
              <Nav.Link className='header__nav-link' href='#'>
                Références
              </Nav.Link>
              <Nav.Link className='header__nav-link' href='#'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
