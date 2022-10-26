import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    return (
        <div className='mx-8 my-8'>
            <div className="px-8 py-6 lg:w-3/4 mx-auto bg-violet-400 text-gray-900 rounded">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-2xl tracking-tighter font-bold">Up to {''}
                            <br className="sm:hidden" />50% Off in all Courses!!!
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free NewsLetter! Use code:</span>
                            <span className="font-bold text-lg">ONE-U</span>
                        </div>
                        <Link to="/courses" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400 hover:bg-sky-500 hover:text-white">Shop Now</Link>
                    </div>
                </div>
            </div>
            <div className='lg:flex my-8'>
                <div className='grid col-span-4 px-4 py-8 shadow-lg mx-4 my-4 lg:my-0 bg-white rounded'>
                    <div className=''>
                        <h1 className='text-2xl font-bold border-2'>The list of the courses</h1>
                    </div>
                    <div className=''>
                        <ul className='list-disc p-4'>
                            <li className='text-xl font-bold'>Coures -1</li>
                            <li className='text-xl font-bold'>Coures -1</li>
                            <li className='text-xl font-bold'>Coures -1</li>
                            <li className='text-xl font-bold'>Coures -1</li>
                            <li className='text-xl font-bold'>Coures -1</li>
                            <li className='text-xl font-bold'>Coures -1</li>
                        </ul>
                    </div>
                </div>
                <div className='grid col-span-8 p-10 shadow-xl bg-white rounded-md'>
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
                        <Course></Course>
                        <Course></Course>
                        <Course></Course>
                        <Course></Course>
                        <Course></Course>
                        <Course></Course>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;