import React, { useEffect, useState } from 'react';
import AuthContext from '../../Context/Auth/AuthContext';
import { auth } from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(loading, user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logoutUser,
        loginUser,
        loading,
        setLoading,
        updateUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;