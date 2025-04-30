import React, { Suspense } from 'react';
import CategoryNews from '../../Pages/CategoryNews/CategoryNews';
import FallBack from '../FallBack/FallBack';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<FallBack />}>
                <CategoryNews />
            </Suspense>
        </div>
    );
};

export default LeftAside;