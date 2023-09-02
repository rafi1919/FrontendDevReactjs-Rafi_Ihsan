import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Navbar expand="lg"  collapseOnSelect fixed='top'  style={{background: "#A30024"}} variant='dark'>
      <Container >
      <Navbar.Brand href="#"><i className="fa-solid fa-utensils" style={{color: "#c51605;"}}></i></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav ' className="dropbar position-fixed top-0 end-0" />
          <Navbar.Collapse id='responsive-navbar-nav'  >             
          <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link  href="/" >Home</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#"><i class="fa-regular fa-circle-user" style={{color: "#ffffff"}}></i></Nav.Link>
              
          </Nav>
          </Navbar.Collapse>
      </Container>
        
    </Navbar>
  );
}

export default App;
