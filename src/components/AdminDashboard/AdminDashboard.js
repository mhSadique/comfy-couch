import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, useHistory } from 'react-router-dom';

const AdminDashboard = () => {
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
                Admin Dashboard
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

                <MenuItem onClick={() => {handleClose(); history.push('/manage-orders')}}>Manage All Orders</MenuItem>
                <MenuItem onClick={() => {handleClose(); history.push('/manage-products')}}>Manage Products</MenuItem>
                <MenuItem onClick={() => {handleClose(); history.push('/make-admin')}}>Make Admin</MenuItem>
                <MenuItem onClick={() => {handleClose(); history.push('/add-product')}}>Add a Product</MenuItem>
            </Menu>
        </>
    );
};

export default AdminDashboard;