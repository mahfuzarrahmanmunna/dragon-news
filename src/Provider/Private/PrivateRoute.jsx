import React, { use } from 'react';
import AuthContext from '../../Context/Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';
import FallBack from '../../Components/FallBack/FallBack';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <FallBack />
    }

    if (user && user?.email) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/auth/login' />
    }
};

export default PrivateRoute;