import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews/LatestNews';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/LeftAside/LeftAside';

const Roots = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews />
                </section>
                <section className='w-11/12 mx-auto my-4 px-4 lg:px-0'>
                    <Navbar />
                </section>
            </header>
            <main className='w-11/12 mx-auto'>
                <aside className='w-3/12'>
                    <LeftAside />
                </aside>
                <section className="main w-6/12">
                    <Outlet />
                </section>
                <aside className='w-3/12'>

                </aside>
            </main>
        </div>
    );
};

export default Roots;