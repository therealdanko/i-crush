import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

const MainNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand to="/">iCrush</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
          <Nav className="me-auto">
            <NavDropdown title="Goals" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink to='/dashboard'>All</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to='/dashboard-daily'>Daily</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to='/dashboard-weekly'>Weekly</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to='/dashboard-monthly'>Monthly</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><NavLink to='/stats'>Stats</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/create-new-task'>New Task</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavBar