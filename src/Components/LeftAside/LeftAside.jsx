import React, { Suspense } from 'react';
import FallBack from '../FallBack/FallBack';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<FallBack />}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;