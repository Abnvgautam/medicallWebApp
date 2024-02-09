import ChooseUs from "../../components/chooseUs/chooseUs"
import Footer from "../../components/footer/footer"
import Navigation from "../../components/navbar/navbar"
import Services from "../../components/services/services"
import Support from "../../components/support/support"
import Container from 'react-bootstrap/Container'
import { Button, Card, Form, Col, Row } from 'react-bootstrap'
import './specialities.css'
import doctor from  './doctor.svg'


const Specialities = () => {
    return (
        <>
        <Navigation />
        <Container fluid className='specialities-blue'>
            <Card className='specialities-card'>
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
                <p className="result">Results</p>
                <Card className='specialities-card-big'>
                    
                    <Container>
                        <Row xs={1} sm={2} md={2} lg={3} className="g-0">
                            <Col>
                                <img
                                    src={doctor}
                                    height="177"
                                    width="189"
                                    alt="doctorImage"
                                    className="doctor-image"
                                />
                            </Col>
                            <Col>
                                <p className="doctor-select">Select Date</p>
                            </Col>
                            <Col>
                                
                            </Col>
                        </Row>
                    </Container>
                </Card>
        </Container>
        <Services />
        <ChooseUs />
        <Support />
        <Footer />
        </>
    );
};


export default Specialities;