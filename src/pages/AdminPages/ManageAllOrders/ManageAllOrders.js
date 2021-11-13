
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrdersSingle from '../../../components/MyOrdersSingle/MyOrdersSingle';
import { Typography, Container, Box } from '@mui/material';
import ManageOrderSingle from '../../../components/ManageOrderSingle/ManageOrderSingle';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/all-orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);


    return (
        <Container>
            {/*Text to show when there is no order  */}
            {!allOrders.length && <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh'
                }}
            >
                <Typography variant="h4">
                    Users have not made any orders yet.
                </Typography>
            </Box>}
            <Box
                sx={{
                    mt: 5,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }
                }}
            >

                {allOrders.map(order => <ManageOrderSingle
                    productId={order.productId}
                    orderId={order._id}
                    status={order.status}
                    key={order._id}
                    email={user.email}
                    phone={order.phone}
                    ordereeName={order.name}
                    ordereeAddress={order.address}
                    setAllOrders={setAllOrders}
                />)}
            </Box>
        </Container>
    );
};

export default ManageAllOrders;