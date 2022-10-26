import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></ Navigate>
    }
    return children
};

export default PrivateRoutes;