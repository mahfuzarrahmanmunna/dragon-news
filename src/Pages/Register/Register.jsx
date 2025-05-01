import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto my-12 max-w-sm shrink-0 shadow-2xl font-poppins">
            <div className="card-body">
                <h2 className='text-xl text-center font-semibold pt-5'>Register your account</h2>
                <div className="divider "></div>
                <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label">Your Name</label>
                    <input type="text" className="input" name='name' placeholder="Enter your name" />

                    {/* Photo */}
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Enter your photo url" />

                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    {/* Checkbox */}
                    <div className='flex justify-center items-center gap-3 mt-2'>
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Accept Term & Conditions</p>
                    </div>
                    <button className="btn btn-primary mt-4">Register</button>
                    <p className='font-semibold text-center pt-6'>AlreadyHave An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
                </fieldset>
            </div>
        </div>
    );
};

export default Register;