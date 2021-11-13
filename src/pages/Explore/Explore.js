import { Container, Paper, Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import CircularProgress from '@mui/material/CircularProgress';

const Explore = () => {

    const [couches, setCouches] = useState([]);

    useEffect(() => {
        fetch('https://morning-harbor-64345.herokuapp.com/couches')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCouches(data);
        })
    }, []);

    return (
        <Box 
            sx={{
                mt: 5,
            }}
        >
            <Container>
                <Typography
                    variant="h4"
                    sx={{mb: 3}}
                >
                    Couches &amp; Sofas
                </Typography>

                {!couches.length &&
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                    </Box>}
                
                <Box 
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)'},
                        gap: '15px',
                        rowGap: '35px'
                    }}
                >
                    {couches.map(couch => <Product key={couch._id} product={couch}/>)}
                </Box>
            </Container>
        </Box>
    );
};

export default Explore;