import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="lg:relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
                                Shape Your future
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Welcome to <br /><span className='font-serif text-5xl text-emerald-800'>One University</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Explore 1000+ of Courses With industry Expert Trainer and mentor and Shape Your Future as Like as Your Dream.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <Link
                            to="/courses"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-lg md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
                        >
                            Explore Our Courses
                        </Link>
                        <Link
                            to="/"
                            aria-label=""
                            className="border-2 px-6 py-3 border-red-300 rounded-md inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-72 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Header;