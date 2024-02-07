import Container from 'react-bootstrap/Container';
import { Button, Card, Form, Col, Row } from 'react-bootstrap'
import homepage from '../home/homepage.svg'
import choose from '../home/choose.svg'
import chat from '../home/chat.svg'
import avatar from '../home/avatar.svg'
import map from '../home/map.svg'
import StarIcon from '@mui/icons-material/Star'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { yellow } from '@mui/material/colors'

const Home = () => {
    return (
        <>
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
                    <div className='text-section-two'>
                        <p className='text-choose-section'>Why Choose Us?</p>
                        <p className='text-choose-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                    </div>
                    <img
                        src={choose}
                        width="549"
                        height="473"
                        className="d-inline-block align-top image-choose"
                        alt="HomepageImage"
                    />
                </div>
            </Container>

            {/* Homepage Support Section */}

            <Container fluid >
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <p className='text-left text-support'>24/7 <span style={{ color: '#0360D9' }}>Live Chat</span> for Instant Support</p>
                        <p className='text-support-para'>Access our 24/7 live chat for immediate assistance
                            and expert support. Whether you have health
                            questions, need advice, or seek information, our
                            dedicated team is here to help you around the clock.</p>
                        <p className='text-support-para'>Connect with us anytime, anywhere for real-time solutions.</p>
                        <Button variant="primary" className='btn-chat'>Start Chat Here</Button>
                    </Col>
                    <Col>
                        <img
                            src={chat}
                            width="395"
                            height="195"
                            className="d-inline-block align-top image-chat"
                            alt="ChatImage"
                        />
                    </Col>
                </Row>
            </Container>

            {/* Break Line */}

            <Container fluid>
                <hr className='hr-line' style={{borderTop: "3px solid #0360D9 "}}></hr>
            </Container>

            <Container>
            <Row xs={1} md={2} lg={2}>
                <Col>
                <p className='text-left text-touch'>Get in <span style={{ color: '#0360D9' }}>Touch</span> </p>
                <p className='text-left text-touch-para'>Reach out and connect with us for all your healthcare needs. Our online platform offers access to a range of services, from general consultations to specialized care, providing you with convenience and expert guidance.</p>  
                <Form>
                    <Form.Control type="name"  className='form' placeholder="Name *" />
                    <Form.Control type="email"  className='form' placeholder="Email *" />
                    <Form.Control type="email"  className='form' placeholder="Password *" />
                    <Form.Select  className='form'>
                        <option>How did you find us?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Button variant="primary" className='btn-form'>Send</Button> 
                    <Row xs={1} md={3} lg={3}>
                    <Col>
                        <div className='phone-icon'>
                                <PhoneInTalkIcon sx={{ fontSize: 36}} /> 
                                <p className='icon-phone'>Phone</p>
                                <p className='icon-phoneNumber'>03 5432 1234</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='phone-icon'>
                                <FaxIcon sx={{ fontSize: 36}} /> 
                                <p className='icon-phone'>Fax</p>
                                <p className='icon-phoneNumber'>03 5432 1234</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='phone-icon'>
                                <EmailIcon sx={{ fontSize: 36}} /> 
                                <p className='icon-phone'>Email</p>
                                <p className='icon-phoneNumber'>info@marcc.com.au</p>
                        </div>
                    </Col>
                </Row>
                </Form>
                </Col>
                <Col>
                <p className='text-left text-touch-members'>What <span style={{ color: '#0360D9' }}>Our Member's</span> Saying About Us </p>
                <Card className='card-feedback'>
                    <Card.Body>
                    <Row>
                        <Col>
                        <img 
                                src={avatar}
                                width="52"
                                height="52"
                                alt="avatarImage"
                                className='avatar-image'
                        />
                         <p className='avatar-name'>Jane Cooper</p>
                         <p className='avatar-date'>12/4/17</p>
                         
                        </Col>
                        <Col>
                        <div className='star-icon'>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                        </div>
                        </Col>
                        <p className='avatar-para'>Evisit on medicall was fanastic, I had a easy consultation with the doctor and it was a good session as in real life. </p>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>

            {/* Footer */}

            <Container fluid className='container-footer'>
            <Row xs={1} md={3} lg={3}>
                <Col>
                    <p className='footer-text'>MEDICALL</p>
                    <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum</p>
                    <p className='footer-para'>volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                </Col>
                <Col>
                    <p className='footer-text'>Useful Links</p>
                        <ul className='list-items'>
                            <li>Home</li>
                            <li>Our Doctors</li>
                            <li>Specialities</li>
                            <li>Contact Us</li>
                        </ul>
                </Col>
                <Col>
                <p className='footer-text-address'>Address</p>
                <img 
                    src={map}
                    width="326"
                    height="170"
                    className='footer-map'
                    alt='map'
                />
                </Col>
            </Row>
            <div className='footer-icons'>
                <FacebookIcon sx={{ fontSize :32}} className='social-icon' />
                <InstagramIcon sx={{ fontSize :32}} className='social-icon' />
                <TwitterIcon sx={{ fontSize :32}}  className='social-icon'/>
            </div>

            <Container fluid>
                <hr className='hr-line-footer' style={{borderTop: "3px solid #FFFFFF "}}></hr>
            </Container>
            
            </Container>
        </>
    );
}


export default Home;