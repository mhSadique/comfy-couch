import React, { useEffect, useState } from 'react';
import { Container, Paper, Box, Typography, Button } from '@mui/material';
import ReviewAndRatingSingle from '../../../../components/ReviewAndRatingSingle/ReviewAndRatingSingle';
import CircularProgress from '@mui/material/CircularProgress';

const ReviewAndRating = () => {
    const [reviewsRatings, setReviewsRatings] = useState([]);

    useEffect(() => {
        fetch('https://morning-harbor-64345.herokuapp.com/reviews-ratings')
        .then(res => res.json())
        .then(data => {
            setReviewsRatings(data);
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
                    sx={{mb: 3}}
                >
                    Reviews &amp; Ratings
                </Typography>

                {!reviewsRatings.length &&
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                    </Box>}
                
                <Box 
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: 'repeat(2, 1fr)'},
                        gap: '55px',
                        rowGap: '65px'
                    }}
                >
                    {reviewsRatings.map((reviewRating, index) => {
                            return <ReviewAndRatingSingle key={reviewRating._id} reviewRating={reviewRating}/>;
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default ReviewAndRating;