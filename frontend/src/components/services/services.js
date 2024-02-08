import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

const Services =()=>{
    return(
        <>
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
        </>
    );
};

export default Services;