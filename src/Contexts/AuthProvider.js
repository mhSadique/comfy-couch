import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const userContextValue = useFirebase();
    return (
        <AuthContext.Provider value={userContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;