import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button} from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../MEDICALL.svg';
import './style.css';



function Navigation() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="navbar-length">
        <Container fluid >
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="159"
              height="42"
              alt="Logo"
              className="d-inline-block align-top medicallLogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-content " >
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/ourdoctors">Our Doctors</Nav.Link>
              <Nav.Link as={NavLink} to="/specialities">Specialities</Nav.Link>
              <Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
            </Nav>
            <Nav className="ml-auto buttons">
              <Button variant="outline-primary" className="mx-4 button-style" >Log In</Button>
              <Button variant="primary" className="button-style">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;