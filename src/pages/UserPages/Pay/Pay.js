import { Box, Typography } from '@mui/material';
import React from 'react';

const Pay = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant="h4">
                Payment system coming soon...
            </Typography>
        </Box>
    );
};

export default Pay;