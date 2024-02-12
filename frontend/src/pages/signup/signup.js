import { Container, Card, Button} from "react-bootstrap";
import './signup.css'
import medicall from './MEDICALL.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Signup =() =>{
    return(
        <>
            <Container fluid className="signup-container">
                <Card className="signup-card">
                    <a href="/" className="signup-logo">
                    <img 
                        src={medicall}
                        width="159"
                        height="42"
                        alt="medicallLogo"
                        className="signup-logo"
                    />
                    </a>
                    <p className="signup-text">Sign Up</p>
                    <Box
                        component="form"
                        className="form-email"
                        sx={{
                          '& > :not(style)': { m: 1, width: '36ch' },
                        }}
                    >
                        <TextField id="standard-basic" className="emailForm" label="Full Name" variant="standard" />
                    </Box>
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
                    <Button variant="primary" className="btn-signup">Signup</Button>
                    <Button variant="outline-dark" className="btn-signup-dark">Signup with Google</Button>
                    <p className="login-here">Already have an account?<a href="/login">Login Here</a></p>
                </Card>
            
        </Container>
        </>
    );
};

export default Signup;