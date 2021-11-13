import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrdersSingle from '../../../components/MyOrdersSingle/MyOrdersSingle';
import { Typography, Container, Box } from '@mui/material';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/order-by-email/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);


    return (
        <Container>
            {/*Text to show when there is no order  */}
            {!myOrders.length && <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh'
                }}
            >
                <Typography variant="h4">
                    You have not made any order yet.
                </Typography>
            </Box>}

            {myOrders.length &&
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant="h4">
                            Your orders
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            mt: 5,
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }
                        }}
                    >

                        {myOrders.map(order => <MyOrdersSingle
                            productId={order.productId}
                            orderId={order._id}
                            status={order.status}
                            key={order._id}
                            email={user.email}
                            setMyOrders={setMyOrders}
                        />)}
                    </Box>
                </>}
        </Container>
    );
};

export default MyOrders;