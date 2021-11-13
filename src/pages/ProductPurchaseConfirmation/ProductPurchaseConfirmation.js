import { TextField, Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ProductPurchaseConfirmation = () => {
    const history = useHistory();
    const {productId} = useParams();
    const { user } = useAuth();
    const [userData, setUserData] = useState({
        productId: productId,
        name: user.displayName,
        email: user.email,
        status: 'pending',
        phone: '',
        address: ''
    });

    const handlePurchaseConfirm = e => {
        fetch('https://morning-harbor-64345.herokuapp.com/save-order-details', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                alert(data);
                history.push('/my-orders')
            })

        e.preventDefault();
    };


    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...userData };
        newValue[field] = value;
        setUserData(newValue);
        console.log(value);
    };


    return (
        <Container
            sx={{ mt: 3, mb: 3, textAlign: 'center' }}
        >
            <Typography variant="h5" sx={{ mb: 3 }}>Fill in all the fields to confirm your purchase</Typography>
            <form onSubmit={handlePurchaseConfirm}>

                <TextField
                    placeholder="Name"
                    variant="standard"
                    sx={{
                        mb: 2,
                        width: { xs: '80%', md: '50%' }
                    }}
                    value={userData.name}
                    name="name"
                    onChange={handleChange}
                /> <br />

                <TextField
                    placeholder="Email"
                    variant="standard"
                    sx={{
                        mb: 2,
                        width: { xs: '80%', md: '50%' }
                    }}
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                    disabled
                /> <br />

                <TextField
                    placeholder="Phone"
                    variant="standard"
                    sx={{
                        mb: 2,
                        width: { xs: '80%', md: '50%' }
                    }}
                    value={userData.phone}
                    name="phone"
                    onChange={handleChange}
                /> <br />

                <TextField
                    placeholder="Address"
                    variant="standard"
                    sx={{
                        mb: 2,
                        width: { xs: '80%', md: '50%' }
                    }}
                    value={userData.address}
                    name="address"
                    onChange={handleChange}
                />


                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#C7A375',
                        display: 'block',
                        mt: 0,
                        mx: 'auto'
                    }}
                    type="submit"
                >Confirm Purchase
                </Button>
            </form>
        </Container>
    );
};

export default ProductPurchaseConfirmation;