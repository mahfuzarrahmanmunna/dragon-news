import React from 'react';
import ScosalLogin from '../ScosalLogin/ScosalLogin';
import FindUs from '../FindUs/FindUs';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <ScosalLogin />
            <FindUs />
        </div>
    );
};

export default RightAside;