import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const ScosalLogin = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Login with</h1>

            <div className='mt-5 space-y-3'>
                <button className='btn btn-outline btn-info w-full'>
                    <FcGoogle className='text-xl' />
                    Login With Google
                </button>
                <button className='btn btn-outline btn-primary w-full'>
                    <FaGithub />
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default ScosalLogin;