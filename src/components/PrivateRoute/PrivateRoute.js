import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {userIsLoggedIn, loading} = useAuth();
    if (loading){
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 5 }}><CircularProgress /></Box>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        userIsLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;