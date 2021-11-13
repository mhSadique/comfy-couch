import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const [ratingValue, setRatingValue] = React.useState(2);
    const [reviewText, setReviewText] = React.useState('');

    const reviewsRatings = {
        rating: ratingValue,
        review: reviewText,
        userEmail: user.email,
        userName: user.displayName
    };

    const handleSubmitReview = () => {
        fetch(`https://morning-harbor-64345.herokuapp.com/save-review-rating`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewsRatings)
        })
        .then(res => res.json())
        .then(data => {
            alert(data);
        })
    };

    const handleChange = (e) => {
        setReviewText(e.target.value);
    };

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'
            }}
        >
            <Typography variant="h4" sx={{ display: 'block', mb: 2 }}>Review our products &nbsp;</Typography>
            <Rating
                sx={{ mb: 2 }}
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                    setRatingValue(newValue);
                }}
            />
            <TextareaAutosize
                onChange={handleChange}
                value={reviewText}
                aria-label="minimum height"
                minRows={3}
                placeholder="Write something about our products."
                style={{ width: 200, marginBottom: '15px' }}
            />
            <Button
                onClick={handleSubmitReview}
                variant="contained"
            >
                Submit you review
            </Button>
        </Box>
    );
};

export default Review;