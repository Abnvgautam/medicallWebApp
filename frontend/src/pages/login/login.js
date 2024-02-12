import { Container, Card, Button} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import './login.css'
import medicall from './MEDICALL.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Login = () =>{
    return(
        <>
        <Container fluid className="login-container">
                <Card className="login-card">
                    <a href="/" className="login-logo">
                    <img 
                        src={medicall}
                        width="159"
                        height="42"
                        alt="medicallLogo"
                        className="login-logo"
                    />
                    </a>
                    
                    <p className="login-text">Login</p>
                    <Box
                        component="form"
                        className="form-email"
                        sx={{
                          '& > :not(style)': { m: 1, width: '36ch' },
                        }}
                    >
                        <TextField id="standard-basic" className="emailForm" label="Email" variant="standard" />
                    </Box>
                    <Box
                        component="form"
                        className="form-password"
                        sx={{
                          '& > :not(style)': { m: 1, width: '36ch' },
                        }}
                    >
                        <TextField id="standard-basic" className="PasswordForm" label="Password" variant="standard" />  
                    </Box>
                    <Button as={NavLink} to="/patients" variant="primary" className="btn-login">Login</Button>
                    <p className="forgot-password">Forgot Password?</p>
                    <Button variant="outline-dark" className="btn-login-dark">Login with Google</Button>
                    <p className="signUp-here">Don't have an account? <a href="/signup">Sign Up Here</a></p>
                </Card>
            
        </Container>
        </>
    );
};

export default Login;