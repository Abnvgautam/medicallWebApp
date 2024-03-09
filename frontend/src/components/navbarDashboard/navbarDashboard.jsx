import '../navbar/style.css'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav} from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom';
import logo from '../navbar/MEDICALL.svg'
import './navbarDashboard.css'
import avatar from './avatar.svg'

const NavbarDashboard =()=>{
    return(
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
            <p className='avatar-name-dashboard'>Finn Allen</p>
            <img 
                                src={avatar}
                                width="52"
                                height="52"
                                alt="avatarImage"
                                className='avatar-image-dashboard'
                        />
                         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    );
};

export default NavbarDashboard;