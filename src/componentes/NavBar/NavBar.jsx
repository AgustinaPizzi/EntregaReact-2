import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link,NavLink } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">
          <img src="../media/img/logo.png" width={100} height={100}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="btn-home">
              Home
            </Link>

            <Nav.Link href="">Envios</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Bienestar</NavLink>
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Fantasia</NavLink>
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Grandes clásicos</NavLink>
            <NavDropdown.Divider />
            <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Dudas</NavLink>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
