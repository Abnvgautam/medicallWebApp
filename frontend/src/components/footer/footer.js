import { Container, Nav, Col, Row } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import map from '../footer/map.svg'
import './footer.css'


const Footer =() => {
    return(
        <>
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
                                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/ourdoctors">Our Doctors</Nav.Link>
                                <Nav.Link as={NavLink} to="/specialities">Specialities</Nav.Link>
                                <Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
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
};

export default Footer;