import React, { useEffect, useState } from 'react';
import { TextField, Container, Box, Button, Typography } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useHistory, useParams } from 'react-router';
import ListItem from '../../components/ListItem/ListItem';
import CircularProgress from '@mui/material/CircularProgress';

const Purchase = () => {
    const [couch, setCouch] = useState({});
    const { _id, name, descriptionShort, img, price, dimensions, descriptionDetails } = couch;
    const { productId } = useParams();
    const history = useHistory();


    console.log(couch, 'from purchase');


    useEffect(() => {
        fetch('https://morning-harbor-64345.herokuapp.com/couches')
            .then(res => res.json())
            .then(data => {
                const desiredCouch = data.find(couch => couch._id === productId);
                setCouch(desiredCouch);
            })
    }, [productId]);

    return (
        <Container
            sx={{
                mt: 3
            }}
        >

            {/* loader */}
            {!couch._id &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>}

            {couch._id &&
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }

                    }}
                >

                    {/* product */}
                    <Box
                        sx={{ width: { xs: '100%', md: '50%' } }}
                    >
                        <img src={img} alt="" style={{ width: '100%' }} />
                    </Box>

                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            p: { xs: 0, md: 3 },
                            pt: { xs: 2, md: 0 }
                        }}
                    >
                        <Typography variant='h4' sx={{ fontWeight: '500', mb: 2 }} >
                            {name}
                        </Typography>

                        <Typography>
                            {descriptionShort}
                        </Typography>

                        <Typography variant="h5" sx={{ mt: 2 }}>
                            Couch details:
                        </Typography>

                        <ul>
                            {descriptionDetails &&
                                descriptionDetails.map(des => <ListItem
                                    itemName={des}
                                    key={des}
                                />)}
                        </ul>

                        <Typography variant="h5" sx={{ mt: 2 }}>
                            Dimenstions:
                        </Typography>

                        <ul>
                            {dimensions &&
                                dimensions.map(dimension => <ListItem
                                    itemName={dimension}
                                    key={dimension}
                                />)}
                        </ul>

                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Price - ${price}
                        </Typography>

                        <Button
                            onClick={() => history.push(`/confirm-purchase/${_id}`)}
                            variant="contained"
                            sx={{ backgroundColor: '#C7A375', px: 3 }}
                        >
                            Proceed To Confirm Purchase
                            <ArrowRightAltOutlinedIcon />
                        </Button>
                    </Box>
                </Box>
            }

        </Container>
    );
};

export default Purchase;