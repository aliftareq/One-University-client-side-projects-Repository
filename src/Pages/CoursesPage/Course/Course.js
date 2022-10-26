import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Course = ({ course }) => {
    const { short_title, Instructor, thumbnail_image } = course
    console.log(course);
    return (
        <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:w-60 lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    // object-cover
                    className="fluid w-full h-56 md:h-64 xl:h-80"
                    src={thumbnail_image}
                    alt="course"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <div>
                        <p className="mb-1 text-2xl font-bold text-gray-100">
                            {short_title}
                        </p>
                        <p className="mb-1 text-sm font-bold text-gray-100">Instructor : <span>{Instructor.name}</span></p>
                        <div className='flex justify-center items-center text-center'>
                            <small className="mb-1 font-bold text-gray-100 mx-2">Course rating: </small>
                            <BsStarFill className="mb-1 text-lg font-semibold text-amber-400" />
                            <BsStarFill className="mb-1 text-lg font-semibold text-amber-400" />
                            <BsStarFill className="mb-1 text-lg font-semibold text-amber-400" />
                            <BsStarFill className="mb-1 text-lg font-semibold text-amber-400" />
                            <BsStarHalf className="mb-1 text-lg font-semibold text-amber-400" />
                        </div>
                    </div>
                    <div>
                        <button type="button" className="px-8 py-3 rounded bg-green-400 hover:bg-green-500 text-gray-800 font-bold my-8">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;