import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews/LatestNews';
import Header from '../Components/Header/Header';

const Roots = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews />
                </section>
            </header>
            <section className="left_nav"></section>
            <section className="main">
                <Outlet />
            </section>
            <section className="right_nav"></section>
        </div>
    );
};

export default Roots;