import React, { use } from 'react';

const fetchPromise = fetch('/categories.json').then(res => res.json())

const CategoryNews = () => {
    const categories = use(fetchPromise)
    console.log(categories);
    return (
        <div>
            <h1 className='text-xl text-accent font-semibold'>All Category</h1>
        </div>
    );
};

export default CategoryNews;