import { Container, Paper, Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../../../../components/Product/Product';
import CircularProgress from '@mui/material/CircularProgress';

const ProductsContainer = () => {

    const [couches, setCouches] = useState([]);

    useEffect(() => {
        fetch('https://morning-harbor-64345.herokuapp.com/couches')
            .then(res => res.json())
            .then(data => {
                setCouches(data);
            })
    }, []);

    return (
        <Box
            sx={{
                mt: 5,
                mb: 5
            }}
        >
            <Container>
                <Typography
                    variant="h4"
                    sx={{ mb: 3 }}
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
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                        gap: '15px',
                        rowGap: '35px'
                    }}
                >
                    {couches.map((couch, index) => {
                        if (index <= 5) {
                            return <Product key={couch._id} product={couch} />;
                        }
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default ProductsContainer;