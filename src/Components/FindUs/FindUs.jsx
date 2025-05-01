import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h3 className='font-bold mb-5'>Find Us On</h3>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start join-item">
                        <FaFacebook size={16} />
                        Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item">
                        <FaTwitter size={16} />
                        Twitter</button>
                    <button className="btn bg-base-100 justify-start join-item">
                        <FaInstagram size={16} />
                        Instagram</button>
                </div >
            </div>
        </div>
    );
};

export default FindUs;