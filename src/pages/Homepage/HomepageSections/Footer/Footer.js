import React from 'react';
import { Container, Paper, Box, Typography, Button } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            sx={{
                mt: 5,
                py: 7,
                backgroundColor: '#F7F6F2'
            }}
        >
            <Container>
                
                <Box 
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)'},
                        gap: '55px',
                        rowGap: '65px'
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{mb: 1}}>
                            Help
                        </Typography>
                        
                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Track Your Order
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Returns and Exchange
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Shipping
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Customer Service
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Current Promotions
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{mb: 1}}>
                            About Us
                        </Typography>
                        
                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Our Story
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Events
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            A Greater Good
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Diversity and Inclusion
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{mb: 1}}>
                            Services
                        </Typography>
                        
                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            ConfyPerks
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Gift Cards
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Trade Membership
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Couch: Guides and Services
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Store Pickup and Collection Center
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{mb: 1}}>
                            Connect
                        </Typography>
                        
                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Contact Us
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Stay Connected
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Career
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Styling Services
                        </Typography>

                        <Typography variant="body" sx={{mb: 1, display: 'block'}}>
                            Request A Catalog
                        </Typography>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;