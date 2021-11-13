import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleMakeAdmin = e => {
        fetch(`http://localhost:5000/make-admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        e.preventDefault();
    };

    const handleEmailChange = e => {
       setEmail(e.target.value);
    };

    return (
        <Box
            sx={{
                width: '100vw',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email your want to make admin"
                    variant="outlined" 
                    sx={{
                        width: {xs: '300px', md: '400px'}
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        display: 'block',
                        mt: 2,
                        mx: 'auto',

                    }}
                >
                    Make admin
                </Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;