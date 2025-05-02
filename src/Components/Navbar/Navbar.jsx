import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import AuthContext from '../../Context/Auth/AuthContext';

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logoutUser } = use(AuthContext)
    const handleLogout = () => {
        logoutUser().then(() => {
            alert('log out successful')
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='lg:flex hidden'>{user && user.email}</div>
            <div className='flex gap-6'>
                <NavLink to='/' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'underline text-indigo-600' : ''}`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'underline text-indigo-600' : ''}`}>About</NavLink>
                <NavLink to='/career' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'underline text-indigo-600' : ''}`}>Career</NavLink>
            </div>
            <div className='flex items-center gap-4'>
                <figure>
                    <img src="https://i.postimg.cc/D0btRm47/user.png" alt="" />
                </figure>
                {
                    user ?
                        <button onClick={() => handleLogout()} className='btn btn-primary px-8'>Logout</button>
                        : <button onClick={() => navigate('/auth/login')} className='btn btn-primary px-8'>
                            Login
                        </button>
                }
            </div>
        </div>
    );
};

export default Navbar;