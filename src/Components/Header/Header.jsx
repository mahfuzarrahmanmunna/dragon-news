import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='text-center flex flex-col items-center gap-3 justify-center p-4 '>
                <img src="https://i.ibb.co.com/N28r5BDk/logo.png" alt="" />
                <p className='text-accent'>
                    Journalism Without Fear or Favour
                </p>
                <p className='font-semibold text-accent'>
                    {
                        format(new Date(), "EEEE MMMM d, uuu")
                    }
                </p>
            </div>
        </div>
    );
};

export default Header;