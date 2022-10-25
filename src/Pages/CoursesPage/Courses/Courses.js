import React from 'react';
import Course from '../Course/Course';

const Courses = () => {
    return (
        <div className='lg:flex mx-8 my-8'>
            <div className='grid col-span-4 border-2 border-red-400 p-10'>
                <h1>The list of the courses</h1>
                <p>Category-1</p>
                <p>Category-1</p>
                <p>Category-1</p>
                <p>Category-1</p>
                <p>Category-1</p>
                <p>Category-1</p>
            </div>
            <div className='grid col-span-8 border-2 border-yellow-400 p-10'>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                </div>
            </div>
        </div>
    );
};

export default Courses;