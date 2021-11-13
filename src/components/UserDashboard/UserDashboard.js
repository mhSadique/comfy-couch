import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from 'react-router-dom';

const UserDashboard = () => {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        // do something before closing the dashboard
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                sx={{color: 'black'}}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {handleClose(); history.push('/my-orders')}}>My Orders</MenuItem>
                <MenuItem onClick={() => {handleClose(); history.push('/review')}}>Review</MenuItem>
                <MenuItem onClick={() => {handleClose(); history.push('/pay')}}>Pay</MenuItem>

            </Menu>
        </>
    );
};

export default UserDashboard;