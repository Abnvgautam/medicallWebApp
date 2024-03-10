import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button} from 'react-bootstrap'
import { Link, NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './MEDICALL.svg';
import './style.css';
import {useSelector, useDispatch} from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice';



function Navigation() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout =()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


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
              <Nav.Link as={NavLink} to="/" className='nav-link-navbar'>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/ourdoctors" className='nav-link-navbar'>Our Doctors</Nav.Link>
              <Nav.Link as={NavLink} to="/specialities" className='nav-link-navbar'>Specialities</Nav.Link>
              <Nav.Link as={NavLink} to="/aboutus" className='nav-link-navbar'>About Us</Nav.Link>
            </Nav>
            <Nav className="ml-auto buttons">
            {user ? (
    <Button as={NavLink} to="/" variant="outline-primary" className="mx-4 button-style" onClick={onLogout}>Log Out</Button>
  ) : (
    <>
      <Button as={NavLink} to="/login" variant="outline-primary" className="mx-4 button-style">Log In</Button>
      <Button as={NavLink} to="/signup" variant="primary" className="button-style">Sign Up</Button>
    </>
  )}  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;