import React from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Components/RightAside/RightAside';

const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 my-10'>
                <section className='col-span-9'>
                    <h1 className='font-bold mb-5'>News Details</h1>
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;