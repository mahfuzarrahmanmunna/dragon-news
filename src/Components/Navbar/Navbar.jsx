import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div>
                <NavLink to='/' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'text-indigo-500' : ''}`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'text-indigo-500' : ''}`}>About</NavLink>
                <NavLink to='/' className={({ isActive }) => `text-accent font-semibold ${isActive ? 'text-indigo-500' : ''}`}>Home</NavLink>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Navbar;