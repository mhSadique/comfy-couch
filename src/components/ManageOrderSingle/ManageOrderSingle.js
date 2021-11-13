import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const ManageOrderSingle = ({
    productId,
    orderId,
    status,
    email,
    setAllOrders,
    ordereeName,
    ordereeAddress,
    phone
}) => {
    const [orderedCouch, setOrderedCouch] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/ordered-couch-by-id/${productId}`)
            .then(res => res.json())
            .then(data => setOrderedCouch(data))
    }, [productId]);


    const handleCancelOrder = () => {
        const proceed = window.confirm('Are you sure you want to cancel the order?');
        if (proceed) {
            fetch(`http://localhost:5000/cancel-order/${orderId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your order has been cancelled');
                    fetch(`http://localhost:5000/all-orders`)
                        .then(res => res.json())
                        .then(data => setAllOrders(data))
                })
        }
    };


    const handleApproveOrder = () => {
        fetch(`http://localhost:5000/approve-order/${orderId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                fetch(`http://localhost:5000/all-orders`)
                    .then(res => res.json())
                    .then(data => setAllOrders(data))
            })
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={orderedCouch.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {orderedCouch.name}
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Price: ${orderedCouch.price}
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Ordered by: {ordereeName}
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Address: {ordereeAddress}
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Phone: {phone}
                </Typography>

            </CardContent>

            {(status === 'approved') && <Chip
                size="small"
                label={status}
                sx={{
                    backgroundColor: 'green',
                    color: 'white'
                }}
            ></Chip>}

            {(status === 'pending') && <Chip
                size="small"
                label={status}
                sx={{
                    backgroundColor: 'red',
                    color: 'white'
                }}
            ></Chip>}

            <CardActions>
                <Button
                    onClick={handleApproveOrder}
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: 'green' }}
                >Approve</Button>

                <Button
                    onClick={handleCancelOrder}
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: 'red' }}
                >Cancel</Button>
            </CardActions>
        </Card>
    );
};

export default ManageOrderSingle;