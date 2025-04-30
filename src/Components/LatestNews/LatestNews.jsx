import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-4'>
            <p className='text-base-100 bg-secondary px-4 font-medium py-2'>
                Latest
            </p>
            <Marquee className='flex gap-6' speed={50} gradient={false} pauseOnHover={true}>
                <p className='font-semibold text-accent'>
                    🔥 Breaking: Global markets surge after unexpected rate cut.
                </p>
                <p className='font-semibold text-accent'>
                    📱 Apple unveils new iPhone with AI-powered camera.
                </p>
                <p className='font-semibold text-accent'>
                    ⚽ Champions League: Real Madrid advances to the final.
                </p>
                <p className='font-semibold text-accent'>
                    🎬 Blockbuster movie breaks all-time box office record.
                </p>
                <p className='font-semibold text-accent'>
                    🌍 UN summit discusses urgent climate change measures.
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;