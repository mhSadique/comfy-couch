
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Typography, Container, Box } from '@mui/material';
import ManageOrderSingle from '../../../components/ManageOrderSingle/ManageOrderSingle';
import CircularProgress from '@mui/material/CircularProgress';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://morning-harbor-64345.herokuapp.com/all-orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);


    return (
        <Container>
            {/*Text to show when there is no order  */}
            {!allOrders.length &&
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
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