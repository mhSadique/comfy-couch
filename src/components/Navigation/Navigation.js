import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
    const { logoutUser, userIsLoggedIn, user, userIsAdmin } = useAuth();
    const history = useHistory();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{
                    backgroundColor: 'white',
                    boxShadow: 'none',
                }}
            >
                <Toolbar sx={{
                    display: { xs: 'flex', md: 'flex' },
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: { xs: 'center', md: 'center' },
                    alignItems: { xs: 'center', md: 'center' },
                    mb: { xs: 3, md: 0 }
                }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "'Architects Daughter', cursive",
                            fontSize: { xs: '40px', md: '40px' },
                            mt: { xs: 3, md: 0 },
                            color: 'black'
                        }}
                    >
                        comfy couch
                    </Typography>

                    <Button sx={{ color: 'black' }} onClick={() => history.push('/')}>Home</Button>
                    <Button sx={{ color: 'black' }} onClick={() => history.push('/explore')}>Explore</Button>
                    {userIsAdmin && <AdminDashboard />}
                    {(userIsLoggedIn && !userIsAdmin) && <UserDashboard />}


                    {!userIsLoggedIn && <Button sx={{ color: 'black' }} onClick={() => history.push('/register')}>Register</Button>}
                    {!userIsLoggedIn && <Button sx={{ color: 'black' }} onClick={() => history.push('/login')}>Login</Button>}
                    {userIsLoggedIn && <Button sx={{ color: 'black' }} onClick={() => logoutUser()}>Logout</Button>}
                    {user.displayName && <Chip label={user.displayName} size="large" variant="outlined" />}





                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;

