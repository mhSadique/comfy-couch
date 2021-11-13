import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrdersSingle from '../../../components/MyOrdersSingle/MyOrdersSingle';
import { Typography, Container, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://morning-harbor-64345.herokuapp.com/order-by-email/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);


    console.log(myOrders, 'from my orders');
    return (
        <Container>
            {/*Text to show when there is no order  */}
            {!myOrders.length &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
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