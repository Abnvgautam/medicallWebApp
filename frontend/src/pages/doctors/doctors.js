import Footer from "../../components/footer/footer";
import Navigation from "../../components/navbar/navbar";
import Support from "../../components/support/support";
import { Container } from "react-bootstrap";
import { Button, Card, Form, Col, Row } from 'react-bootstrap'
import team from './team.svg'
import './doctors.css'

const Doctors = () => {
    return (
        <>
        <Navigation />
        <Container fluid className="ourDoctors-blue">
        <Card className='ourDoctors-card'>
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
        <Container fluid className="doctors-specialities">
            <img 
                src={team}
                width="1205"
                height="760"
                alt="doctorteam"
                className="doctor-team"
            />
        </Container>
        <Container>
        <p className='text-center text-containerNext'>Our Doctors</p>
        
        </Container>
        
        <Support />
        <Footer />
        </>
    );

};

export default Doctors;