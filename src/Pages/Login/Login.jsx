import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../Context/Auth/AuthContext';

const Login = () => {
    const [error, setError] = useState([])
    console.log(error);
    const { loginUser } = use(AuthContext);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // sign in here
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(err => {
                // console.log(err)
                const errCode = err.message
                setError(errCode)
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto my-12 max-w-sm shrink-0 shadow-2xl font-poppins">
            <div className="card-body">
                <h2 className='text-xl text-center font-semibold pt-5'>Login your account</h2>
                <div className="divider "></div>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-primary mt-4">Login</button>
                    {
                        error && <p className='text-red-500'>{error}</p>
                    }
                    <p className='font-semibold text-center pt-6'>Don’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;