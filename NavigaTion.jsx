import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavigaTion() {

  const [x, setX] = useState(false);
const showDropdown = (event)=>{
  setX(!x);
}
const hideDropdown = (event) => {
  setX(false);
}
  return (
    <Navbar className='nav' expand="lg">
      <Container>
        <Navbar.Brand  href="#home"><h3>abdus sobur</h3></Navbar.Brand>
        
        <Navbar.Toggle>  <span><FontAwesomeIcon icon={faBars} /></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>

            <NavDropdown    show={x}
              onMouseEnter={showDropdown} 
              onMouseLeave={hideDropdown} title="services" className='navd_roup' id="basic-nav-dropdown">
                            
                <NavDropdown.Item className='item' href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">experince</Nav.Link>
            <Nav.Link href="#link">protoflio</Nav.Link>
            <Nav.Link href="#link">blog</Nav.Link>
            <Nav.Link href="#link">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigaTion;