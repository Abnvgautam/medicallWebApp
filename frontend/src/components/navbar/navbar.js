import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../MEDICALL.svg';
import homepage from '../homepage.svg';
import './style.css';



function Navigation() {
    

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="navbar-length">
        <Container>
          <Navbar.Brand href="#home">
            <img
                src={logo}
                width="159"
                height="42"
                alt="Logo"
                className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-content " >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Our Doctors</Nav.Link>
                <Nav.Link href="#pricing">Specialities</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
           </Nav>
            <Nav className="ml-auto">
                <Button variant="outline-primary" className="mx-4 button-style" >Log In</Button>
                <Button variant="primary" className="button-style">Sign Up</Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>

      <Container fluid className="container-style">
        <div className="d-flex justify-content-end">
            <img  
                src={homepage}
                width="473"
                height="471"
                className="d-inline-block align-top image-home"
                alt="HomepageImage"
            />
        </div>
        
      </Container>
      

      
    </>
  );
}

export default Navigation;