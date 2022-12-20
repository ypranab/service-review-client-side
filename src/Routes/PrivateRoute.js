import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h2 className='text-5xl'>Loading</h2>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace>Login</Navigate>
    );
};

export default PrivateRoute;