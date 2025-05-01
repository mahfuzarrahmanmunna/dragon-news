import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const ErrorPage = ({ message = "Something went wrong.", code = 404 }) => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-6">
                <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
                    <div className="mb-6">
                        <h1 className="text-[6rem] font-extrabold text-indigo-600 tracking-tight leading-none">
                            {code}
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            {message}
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Sorry for the inconvenience. Try refreshing the page, or click the button below to return.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-200 shadow-md"
                    >
                        ← Go Back
                    </button>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
