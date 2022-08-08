/* eslint-disable jsx-a11y/anchor-has-content */
import CartWidget from "../CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar () {
return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
    <Navbar.Brand href="#home">ECOMMERCE</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">HOME</Nav.Link>
        <Nav.Link href="#pricing">ABOUT</Nav.Link>
        <Nav.Link href="#pricing">USER</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets"></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          <CartWidget />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)}

export default NavBar;
