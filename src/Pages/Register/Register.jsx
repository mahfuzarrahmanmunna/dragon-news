import React, { use } from 'react';
import { Link } from 'react-router';
import AuthContext from '../../Context/Auth/AuthContext';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // create user here
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto my-12 max-w-sm shrink-0 shadow-2xl font-poppins">
            <div className="card-body">
                <h2 className='text-xl text-center font-semibold pt-5'>Register your account</h2>
                <div className="divider "></div>
                <form className="fieldset" onSubmit={handleRegister}>
                    {/* Name */}
                    <label className="label">Your Name</label>
                    <input type="text" className="input" name='name' placeholder="Enter your name" />

                    {/* Photo */}
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Enter your photo url" />

                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    {/* Checkbox */}
                    <div className='flex justify-center items-center gap-3 mt-2'>
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Accept Term & Conditions</p>
                    </div>
                    <button type='submit' className="btn btn-primary mt-4">Register</button>
                    <p className='font-semibold text-center pt-6'>AlreadyHave An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;