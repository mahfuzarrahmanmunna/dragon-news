import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews/LatestNews';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/LeftAside/LeftAside';
import RightAside from '../Components/RightAside/RightAside';

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
            <main className='w-11/12 mx-auto  lg:grid grid-cols-12 gap-8'>
                <aside className='col-span-3 h-fit lg:sticky top-0'>
                    <LeftAside />
                </aside>
                <section className="main col-span-6">
                    <Outlet />
                </section>
                <aside className='col-span-3 lg:sticky top-0 h-fit'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default Roots;