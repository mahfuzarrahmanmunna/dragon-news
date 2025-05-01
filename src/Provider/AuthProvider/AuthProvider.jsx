import React, { useState } from 'react';
import AuthContext from '../../Context/Auth/AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'hablu',
        email: 'hablu@email.com'
    })

    const authData = {
        user,
        setUser
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;