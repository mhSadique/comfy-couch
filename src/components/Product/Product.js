import { Paper, Box, Button, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const history = useHistory();
    const { name, img, price, descriptionShort, _id } = product;
    return (
        <Paper elevation={12}>

            <Box sx={{ p: 1 }}>
                <img src={img} alt="" style={{ width: '100%', marginBottom: '20px' }} />

                <Typography sx={{ mb: 1, fontWeight: 500, fontSize: '18px' }}>
                    {name}
                </Typography>

                <Typography sx={{
                    mb: 1,
                    color: 'gray',
                    fontStyle: 'italic',
                    fontSize: '15px'
                }}>
                    {descriptionShort.slice(0, 80) + '...'}
                </Typography>

                <Typography sx={{ mb: 1, fontSize: '20px' }}>
                    ${price}.00
                </Typography>
                <Button
                    onClick={() => history.push(`/purchase/${_id}`)}
                    sx={{
                        color: 'black',
                        ml: -1
                    }}
                >Purchase
                    <ArrowRightAltOutlinedIcon />
                </Button>
            </Box>
        </Paper>
    );
};

export default Product;