import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
      <LinkContainer to="/">
        <h2>CHARLES GORE</h2>
      </LinkContainer>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/blog">
              <Nav.Link>
                <i className="fas fa-shopping-cart" /> Blog
              </Nav.Link>
            </LinkContainer>

            <Nav title="" id="username">
              <LinkContainer to="/galleries">
                <Nav.Link>
                  <i className="fas fa-user" /> Galleries
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link onClick="">
                  <i className="fas fa-sign-out-alt" /> About
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
