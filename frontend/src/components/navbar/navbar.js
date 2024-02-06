import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button, Card, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../MEDICALL.svg';
import homepage from '../homepage.svg';
import './style.css';



function Navigation() {


  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="navbar-length">
        <Container fluid >
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Our Doctors</Nav.Link>
              <Nav.Link href="#pricing">Specialities</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
            <Nav className="ml-auto buttons">
              <Button variant="outline-primary" className="mx-4 button-style" >Log In</Button>
              <Button variant="primary" className="button-style">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>


      {/* Homepage Section */}

      <Container fluid className="container-style">
        <div className="d-flex justify-content-end">
          <p className='text-left homeText'>Get online advice from a <span style={{ color: '#0360D9' }}>healthcare professional</span> for your health concerns.</p>
          <img
            src={homepage}
            width="463"
            height="461"
            className="d-inline-block align-top image-home"
            alt="HomepageImage"
          />
        </div>

        {/* Homepage Card */}

        <Card className='homepageCard'>
          <Card.Body className='cardText'>Book an Appointment</Card.Body>
          <Container>
            <Row xs={1} sm={2} md={6} lg={6} className="g-0">
              <Col>
                <Form.Select aria-label="Default select example" className='select-form'>
                  <option>Specialities</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example" className='select-form'>
                  <option>Doctor's</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example" className='select-form'>
                  <option>Date</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example" className='select-form'>
                  <option>Time</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="primary" className='btn-card'>Search</Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>

      {/* Homepage Blue Section */}

      <Container fluid className='container-style-blue'></Container>
        <Container fluid className='container-style container-style-two'>
            <p className='text-center text-containerNext'>Our Consulting Specialities</p>
            <p className='text-center text-para'>Our Canadian online doctors can address various conditions. Easily schedule virtual visits with specialists, such as mental health, dermatology, and pediatric primary care, all from the comfort of your home.</p>

        {/* Homepage Card Section */}

        <Container className='container-card'>
          <Row xs={1} md={2} lg={4}>
            {/* First Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>General Medicine</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Second Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>Dermatology</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Third Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>Psychiatry</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Fourth Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>Internal Medicine</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className='container-card-two'>
          <Row xs={1} md={2} lg={4}>
            {/* First Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>Pediatrics</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Second Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>Gyanecology</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Third Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>Orthopedics</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Fourth Card */}
            <Col>
              <Card className='card-box'>
                <Card.Body>
                  <Card.Title>Endocrinology</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </Container>

      {/* Homepage Choose Section */}

      <Container fluid className='container-choose-section'>
      <div className="d-flex justify-content-end">
      <p className='text-left text-choose-section'>Why Choose Us?</p>
      <img
            src={homepage}
            width="463"
            height="461"
            className="d-inline-block align-top image-home"
            alt="HomepageImage"
          />
        </div>
      </Container>


    </>
  );
}

export default Navigation;