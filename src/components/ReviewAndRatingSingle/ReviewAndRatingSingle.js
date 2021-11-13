import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ReviewAndRatingSingle = ({ reviewRating }) => {
    const { rating, review, userEmail, userName } = reviewRating;
    return (
        <Box>
            <Typography variant="h6" sx={{mb: 2}}>{userName}</Typography>
            <Rating name="read-only" sx={{mb: 2}} value={rating} readOnly />
            <Typography variant="body1" sx={{fontSize: '27px', mb: 1}}>{review}</Typography>

        </Box>
    );
};

export default ReviewAndRatingSingle;