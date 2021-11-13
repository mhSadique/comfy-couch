import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router';

const Banner = () => {
    const history = useHistory();

    return (
        <Box sx={{
            backgroundImage: `url("https://i.ibb.co/bPh31kp/banner.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: { xs: '60vh', md: '90vh' }
        }}>
            <Box
                sx={{
                    backgroundColor: 'rgba(80, 52, 30, 0.5)',
                    minHeight: { xs: '60vh', md: '90vh' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography
                    variant='h3'
                    sx={{ 
                        color: 'white', 
                        mb: 3, 
                        mt: { xs: 3, md: -3 }
                     }}
                >
                    Flash Sale on comfy couch
                </Typography>

                <Typography
                    variant='h2'
                    sx={{ color: 'white', mb: 6 }}
                >
                    Get upto 30% discount
                </Typography>

                <Button
                    onClick={() => history.push('/explore')}
                    variant="contained"
                    sx={{ 
                        backgroundColor: "white", 
                        color: 'black',
                        py: 1,
                        px: 8, 
                        mb: { xs: 4, md: 0 }
                     }}
                >Explore the Comfy</Button>
            </Box>
        </Box>
    );
};

export default Banner;

// bg_img url = https://i.ibb.co/bPh31kp/banner.jpg