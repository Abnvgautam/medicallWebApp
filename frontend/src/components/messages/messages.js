import './messages.css'
import '../../pages/patientDashboard/patientDashboard.css'
import {Container, Card, Col, Row} from 'react-bootstrap'
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink, useNavigate} from 'react-router-dom'
import NavbarDashboard from '../navbarDashboard/navbarDashboard';
import {useSelector, useDispatch} from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice';

const Messages =() =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state)=> state.auth)

    const onLogout =()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    let displayName="";
    if(user && user.role === 'patient'){
        displayName = user.name
    }else if(user && user.role === 'doctor'){
        displayName = user.name
    }

return(
    <>
        <NavbarDashboard />
            <Container fluid className='container-patientTab'>
            <Card className='card-patient'>
            <Card.Body>
                        <Row>
                            <Col>
                                <p className='dashboard-date'>10:12PM September 4, 2024</p>
                                <p className='dashboard-text'>Good Evening, {displayName}</p>
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </Card.Body>
            </Card>
            <Row xs={1} sm={2} md={4} lg={4}>
                <Col>
                {user.role === 'doctor' && (
                    <Card className='card-dashboard'>
                    <NavLink to="/doctors/appointments" activeClassName="active" className="dashboard-content dashboard-link">
                        <BookOnlineIcon /> Appointment
                    </NavLink>
                    <NavLink to="/doctors/messages" activeClassName="active" className="dashboard-content dashboard-link">
                        <EmailIcon /> Patients
                    </NavLink>
                    <NavLink to="/doctors/reports" activeClassName="active" className="dashboard-content dashboard-link">
                        <ArticleIcon /> Reports
                    </NavLink>
                    <NavLink to="/" activeClassName="active" className="dashboard-content dashboard-link" onClick={onLogout}>
                        <LogoutIcon /> Logout
                    </NavLink>
            </Card>
                )}

                {user.role ==='patient' && (
                    <Card className='card-dashboard'>
                    <NavLink to="/patients/appointments" activeClassName="active" className="dashboard-content dashboard-link">
                        <BookOnlineIcon /> Appointment
                    </NavLink>
                    <NavLink to="/patients/messages" activeClassName="active" className="dashboard-content dashboard-link">
                        <EmailIcon /> Messages
                    </NavLink>
                    <NavLink to="/patients/reports" activeClassName="active" className="dashboard-content dashboard-link">
                        <ArticleIcon /> Reports
                    </NavLink>
                    <NavLink to="/patients/history" activeClassName="active" className="dashboard-content dashboard-link">
                        <HistoryIcon /> History
                    </NavLink>
                    <NavLink to="/patients/chat" activeClassName="active" className="dashboard-content dashboard-link">
                        <ChatIcon /> Chat
                    </NavLink>
                    <NavLink to="/patients/profile" activeClassName="active" className="dashboard-content dashboard-link">
                        <AccountBoxIcon /> Profile
                    </NavLink>
                    <NavLink to="/patients/settings" activeClassName="active" className="dashboard-content dashboard-link">
                        <SettingsIcon /> Settings
                    </NavLink>
                    <NavLink to="/" activeClassName="active" className="dashboard-content dashboard-link" onClick={onLogout}>
                        <LogoutIcon /> Logout
                    </NavLink>
            </Card>

                )}
                
                </Col>
                <Col>
                <Card className='card-dashboard-expand'>
                    <Card.Body className='messages-text'>Messages</Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
            
            
    </>
);
};

export default Messages;