import React, { use } from 'react';
import { NavLink } from 'react-router';

const fetchPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(fetchPromise)
    return (
        <div>
            <h1 className='text-xl text-primary font-semibold'>All Category {categories.length}</h1>
            <div className='grid grid-cols-1 mt-5'>
                {
                    categories.map(category => <NavLink
                        className={({ isActive }) =>
                            `btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent ${isActive ? 'bg-base-300' : ''}`
                        }
                        key={category.id}
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;