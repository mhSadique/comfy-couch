import { Container, Box, Paper, Typography } from '@mui/material';
import React from 'react';

const CompaniesWePartnerWith = () => {
    return (
        <div>
            <Container>
                        <Typography variant="h4" sx={{ mx: 'auto', mb: 5 }}>
                            Companies We Partner with
                        </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: '20px'
                    }}
                >
                    <Paper elevation={24}>
                        <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                            Etsy
                        </Typography>
                    </Paper>

                    <Paper elevation={24}>
                        <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                            Amazon
                        </Typography>
                    </Paper>

                    <Paper elevation={24}>
                        <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                            Apt2B
                        </Typography>
                    </Paper>

                    <Paper elevation={24}>
                    <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                        CB2
                    </Typography>
                    </Paper>

                    <Paper elevation={24}>
                    <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                        Bed &amp; Bath
                    </Typography>
                    </Paper>

                    <Paper elevation={24}>
                    <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                        Wayfair
                    </Typography>
                    </Paper>

                    <Paper elevation={24}>
                    <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                       IKEA
                    </Typography>
                    </Paper>

                    <Paper elevation={24}>
                    <Typography variant="h2" sx={{ px: 3, py: 3, fontSize: '50px' }}>
                        Goodee
                    </Typography>
                    </Paper>



                    

                    

                    

                    

                    

                
            </Box>
        </Container>
        </div >
    );
};

export default CompaniesWePartnerWith;