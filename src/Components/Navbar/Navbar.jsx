import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='flex gap-6'>
                <NavLink to='/' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'underline text-indigo-600' : ''}`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'underline text-indigo-600' : ''}`}>About</NavLink>
                <NavLink to='/career' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'underline text-indigo-600' : ''}`}>Career</NavLink>
            </div>
            <div className='flex items-center gap-4'>
                <figure>
                    <img src="https://i.postimg.cc/D0btRm47/user.png" alt="" />
                </figure>
                <button className='btn btn-primary px-8'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;