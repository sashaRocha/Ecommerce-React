/* eslint-disable jsx-a11y/anchor-has-content */
import CartWidget from "../CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './NavBar.css';


function NavBar () {
return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
    <Navbar.Brand href="#home"><Link to={`/`} className="links">ECOMMERCE</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features"><Link to="/category/celular" className="links">Phone</Link></Nav.Link>
        <Nav.Link href="#pricing"><Link to="/category/televisores" className="links">Televisores</Link></Nav.Link>
        <Nav.Link href="#pricing"><Link to="/category/notebook" className="links">Notebook</Link></Nav.Link>
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
