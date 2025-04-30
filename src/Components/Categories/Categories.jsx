import React, { use } from 'react';
import { NavLink } from 'react-router';

const fetchPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(fetchPromise)
    return (
        <div>
            <h1 className='text-xl text-accent font-semibold'>All Category {categories.length}</h1>
            <div className='grid grid-cols-1 mt-5'>
                {
                    categories.map(category => <NavLink
                        className={'btn bg-base-100 border-0 hover:bg-base-200'}
                        key={category.id}>
                        {category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;