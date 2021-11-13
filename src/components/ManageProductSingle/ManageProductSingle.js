import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const ManageOrderSingle = ({product, setProducts}) => {

    const {_id, name, img, price, descriptionShort} = product;



    const handleRemoveProduct = () => {
        const proceed = window.confirm('Are you sure you want to cancel the order?');
        if (proceed) {
            fetch(`https://morning-harbor-64345.herokuapp.com/remove-product/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    fetch(`https://morning-harbor-64345.herokuapp.com/all-products`)
                        .then(res => res.json())
                        .then(data => setProducts(data))
                })
        }
    };



    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Price: ${price}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {descriptionShort.slice(0, 100)}...
                </Typography>

            </CardContent>


            <CardActions>

                <Button
                    onClick={handleRemoveProduct}
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: 'red' }}
                >Remove this product</Button>
            </CardActions>
        </Card>
    );
};

export default ManageOrderSingle;