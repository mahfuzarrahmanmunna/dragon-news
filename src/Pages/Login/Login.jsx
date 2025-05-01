import React from 'react';
import { Link, Links } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto my-12 max-w-sm shrink-0 shadow-2xl font-poppins">
            <div className="card-body">
                <h2 className='text-xl text-center font-semibold pt-5'>Login your account</h2>
                <div className="divider "></div>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary mt-4">Login</button>
                    <p className='font-semibold text-center pt-6'>Don’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
                </fieldset>
            </div>
        </div>
    );
};

export default Login;