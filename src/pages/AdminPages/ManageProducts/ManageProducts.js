
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageProductSingle from '../../../components/ManageProductSingle/ManageProductSingle';
import { Typography, Container, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://morning-harbor-64345.herokuapp.com/all-products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email]);

    console.log(products);


    return (
        <Container>
            {/*Text to show when there is no products  */}
            {!products.length &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>}

            {products.length &&
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant="h4">
                            All couches
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            mt: 5,
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                            gap: '30px'
                        }}
                    >

                        {products.map(product => <ManageProductSingle
                            key={product._id}
                            product={product}
                            setProducts={setProducts}
                        />)}
                    </Box>
                </>}
        </Container>
    );
};

export default ManageProducts;