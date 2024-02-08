import Container from 'react-bootstrap/Container'
import chat from '../support/chat.svg'
import { Button, Col, Row } from 'react-bootstrap'


const Support =()=>{
    return(
        <>
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
        </>
    );
};

export default Support;