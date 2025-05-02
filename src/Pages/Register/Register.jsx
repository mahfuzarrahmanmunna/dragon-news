import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../Context/Auth/AuthContext';

const Register = () => {
    const [nameError, setNameError] = useState('')
    const { createUser, setUser, updateUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()

        // reset Error Status
        setNameError('')


        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError('Name Should be 5 character or more than');
            return
        }
        else {
            setNameError('')
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // create user here
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate(`${location?.state ? location.state : '/'}`)
                        console.log(user);
                    })
                    .catch(err => {
                        console.log(err);
                        setUser(user)
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='w-full mx-auto ps-5 lg:ps-0'>
            <div className="card bg-base-100 w-full mx-auto my-12  max-w-sm shrink-0 shadow-2xl font-poppins">
                <div className="card-body">
                    <h2 className='text-xl text-center font-semibold pt-5'>Register your account</h2>
                    <div className="divider "></div>
                    <form className="fieldset" onSubmit={handleRegister}>
                        {/* Name */}
                        <label className="label">Your Name</label>
                        <input type="text" className="input" name='name' placeholder="Enter your name" />
                        {
                            nameError && <p className='text-xs text-red-500'>{nameError}</p>
                        }

                        {/* Photo */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Enter your photo url" />

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
        </div>
    );
};

export default Register;