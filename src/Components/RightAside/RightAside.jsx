import React from 'react';
import ScosalLogin from '../ScosalLogin/ScosalLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../Qzone/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <ScosalLogin />
            <FindUs />
            <QZone />
        </div>
    );
};

export default RightAside;