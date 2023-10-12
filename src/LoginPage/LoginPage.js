import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className='pageColor w-screen h-screen flex items-center justify-center'>

            <div className='flex h-full w-full flex-col lg:flex-row'>
                {/* Left part */}
                <div className='h-full lg:w-1/2 flex items-center justify-center'>
                    <div className='text-center lg:ml-36 lg:mb-36'>
                        <h1 className='text-5xl font-bold textColor mb-4 text-left'>facebook</h1>
                        <h3 className='text-xl font-medium'>Facebook helps you connect and share</h3>
                        <h3 className='text-xl text-left font-medium '>with the people in your life</h3>
                    </div>
                </div>
                {/* Right Part */}
                <div className="h-full lg:w-1/2 p-8 flex items-center lg:grid lg:grid-cols-1">
                    <div className='border border-2 p-4 w-full max-w-xs mb-16 formPart rounded-lg shadow-lg'>
                        <form action="" className="flex flex-col items-center ">
                            <input
                                type="text"
                                placeholder="Email address or phone number"
                                className="input h-10 input-bordered w-full mb-4 focus:border-sky-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered h-10 w-full mb-4 focus:border-sky-500"
                            />

                            <input
                                className="py-2 font-bold border rounded-lg bg-blue-500 text-white w-full mb-4"
                                type="submit"
                                value="Log in"
                            />
                            <p className="text-center mb-4 text-sky-600 text-sm">Forgotten password?</p>
                            <hr className="border-gray-400 w-full mb-4" />
                            <input
                                className="py-2 font-bold border rounded-lg bg-green-500 text-white w-2/3"
                                type="submit"
                                value="Create new account"
                            />
                        </form>
                    </div>
                    <div className='lastLine ml-4'>
                        <p className='text-sm'>Create a Page for a celebrity, brand or business.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
