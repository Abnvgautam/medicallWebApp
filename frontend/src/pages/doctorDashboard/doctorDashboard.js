import { Navbar, Nav, Row, Col, Card, Container} from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom';
import './doctorDashboard.css'
import logo from './MEDICALL.svg'
import avatar from './avatar.svg'




const patientDashboard = () =>{

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
            <Nav className="ml-auto navbar-content navbar-doctorTab" >
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/messages">Messages</Nav.Link>
            </Nav>
            <Nav className="ml-auto buttons">
            <p className='avatar-name-doctorTab'>Hi, Dr Sean</p>
            <img 
                                src={avatar}
                                width="52"
                                height="52"
                                alt="avatarImage"
                                className='avatar-image-doctorTab'
                        />
                         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Container fluid className="container-doctorTab">
        <Row sm={4} md={4} lg={6} className='doctorTab-cards'>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
            <p className='docotorTab-text'>Appointments</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Schedule</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
            <p className='docotorTab-text-two'>Patients</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Reports</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Activity</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Settings</p>
            </Col>
        </Row>
    </Container>
    <p className='appointments-text'>Appointments</p>
            
            
            
        </>
    );
};

export default patientDashboard;