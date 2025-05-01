import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 py-4 mx-auto'>
                <Navbar />
            </header>
            <main className='w-11/12'>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;