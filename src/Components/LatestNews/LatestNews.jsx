import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-4'>
            <p className='text-base-100 bg-secondary px-4 font-medium py-2'>
                Latest
            </p>
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                <p className='font-semibold text-accent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque assumenda nam distinctio, quam, commodi aspernatur provident
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;