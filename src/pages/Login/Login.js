import React, { useState } from 'react';
import { TextField, Box, Button, Container, Typography } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const {loginUser} = useAuth();

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, history, location);
        e.preventDefault();
    };

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...loginData };
        newValue[field] = value;
        setLoginData(newValue);
    };
    
    return (
        <Container
            sx={{ mt: 3, mb: 3, textAlign: 'center' }}
        >
            <Typography variant="h5" sx={{mb: 3}}>Log in to experience the comfy.</Typography>
            <form onSubmit={handleLogin}>

            <TextField
                    label="Email"
                    type="email"
                    name="email"
                    variant="standard"
                    sx={{ mb: 2, 
                        width: {xm: '100%', md: '35%'} 
                    }}
                    onChange={handleChange}
                /> <br/>

<TextField
                    label="Password"
                    type="password"
                    name="password"
                    variant="standard"
                    sx={{ mb: 2, 
                        width: {xm: '100%', md: '35%'} 
                    }}
                    onChange={handleChange}
                /> <br/>



                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        backgroundColor: '#C7A375',
                        display: 'block',
                        mt: 0,
                        mx: 'auto'
                    }}
                >Login
                </Button>
            </form>

            <Button
                    onClick={() => history.push('/register')}
                    variant="text"
                    sx={{
                        display: 'block',
                        mt: 2,
                        mx: 'auto'
                    }}
                >New user? Register.
                </Button>
        </Container>
    );
};

export default Login;