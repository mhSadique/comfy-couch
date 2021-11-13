import React, { useState } from 'react';
import { TextField, Box, Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {registerUser, userIsLoggedIn, user} = useAuth();

    const handleRegister = e => {
        registerUser(loginData);
        // registerUser(loginData.email, loginData.password, loginData.name);
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
            <Typography variant="h5" sx={{mb: 3}}>Register as a new user to experience the comfy.</Typography>
            <form onSubmit={handleRegister}>

                <TextField
                    label="Name"
                    type="text"
                    name="name"
                    variant="standard"
                    sx={{ mb: 2, 
                        width: {xm: '100%', md: '35%'} 
                    }}
                    onChange={handleChange}
                /> <br/>

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
                    name="password"
                    type="password"
                    variant="standard"
                    sx={{ mb: 2, 
                        width: {xm: '100%', md: '35%'} 
                    }}
                    onChange={handleChange}
                /> <br/>


                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#C7A375',
                        display: 'block',
                        mt: 0,
                        mx: 'auto'
                    }}
                    onClick={handleRegister}
                >Register
                </Button>
            </form>

            <Button
                    onClick={() => history.push('/login')}
                    variant="text"
                    sx={{
                        display: 'block',
                        mt: 2,
                        mx: 'auto'
                    }}
                >Already Registered? Log in.
                </Button>
        </Container>
    );
};

export default Register;