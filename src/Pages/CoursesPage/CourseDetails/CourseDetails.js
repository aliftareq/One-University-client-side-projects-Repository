import React from 'react';
import Pdf from "react-to-pdf";
import { FcClock } from 'react-icons/fc';
import { FiYoutube } from 'react-icons/fi';
import { RiArticleLine } from 'react-icons/ri';
import { HiOutlineFolderDownload } from 'react-icons/hi';
import { CgInfinity } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { GiTrophyCup } from "react-icons/gi";
import { Link, useLoaderData } from 'react-router-dom';
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import PdfPage from '../PdfPage/PdfPage';

const CourseDetails = () => {
    //loading course data
    const course = useLoaderData()
    //destructuring data from course.
    const { id, title, short_title, title_image, Price, time_left, course_Include, details } = course
    //getting the pdf reference
    const ref = React.createRef();
    return (
        <div className='mx-8 my-8'>
            <div className="  py-4 shadow-md bg-white text-gray-700 rounded-md">
                <div className=' flex justify-center items-center bg-amber-500 my-4 p-4 text-center'>
                    <h1 className='text-xl lg:text-4xl font-bold'>{title}</h1>
                    {/* pdf making button here */}
                    <Pdf targetRef={ref} filename={`${short_title}.pdf`}>
                        {({ toPdf }) =>
                            <button onClick={toPdf}>
                                <BsFillFileEarmarkPdfFill className='mx-8 text-6xl lg:text-6xl bg-yellow-300 border-2 border-yellow-200 px-2 py2 rounded hover:bg-green-400' title='make a pdf of this page' />
                            </button>
                        }
                    </Pdf>
                </div>
                {/* pdf reference value */}
                <div ref={ref} className=" p-4 lg:w-2/4 mx-auto space-y-4">
                    {/* title image */}
                    <div className="space-y-2">
                        <img src={title_image} alt="" className="block object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    {/* prices */}
                    <div className="space-y-2">
                        <span className="text-5xl font-bold">${Price.Current_Price}</span>
                        <span className='text-2xl mx-2'><del>${Price.Previous_Price}</del></span>
                        <span className='text-2xl ms-2'>{Price.Price_off}% off</span>
                    </div>
                    <div className='flex items-center'>
                        <FcClock />
                        <p className='mx-2 text-red-500'><span className='font-bold'>{time_left}</span> left at this price!</p>
                    </div>
                    {/* Features */}
                    <div>
                        <h1 className='text-xl font-bold'>This course includes:</h1>
                        <div className='flex items-center'>
                            <FiYoutube />
                            <p className='mx-4'>{course_Include.video} hours on-demand video</p>
                        </div>
                        <div className='flex items-center'>
                            <RiArticleLine />
                            <p className='mx-4'>{course_Include.Article} article</p>
                        </div>
                        <div className='flex items-center'>
                            <HiOutlineFolderDownload />
                            <p className='mx-4'>{course_Include.resource} downloadable resources</p>
                        </div>
                        <div className='flex items-center'>
                            <CgInfinity />
                            <p className='mx-4'>Full lifetime access</p>
                        </div>
                        <div className='flex items-center'>
                            <ImMobile />
                            <p className='mx-4'>Access on mobile and TV</p>
                        </div>
                        <div className='flex items-center'>
                            <GiTrophyCup />
                            <p className='mx-4'>Certificate of completion</p>
                        </div>
                    </div>
                    {/* requirements */}
                    <div>
                        <h1 className='text-xl font-bold'>Requirement:</h1>
                        <ul className='list-disc px-6'>
                            <li>Macintosh (OSX)/ Windows(Vista and higher) Machine</li>
                            <li>Internet Connection</li>
                        </ul>
                    </div>
                    {/* description */}
                    <div>
                        <h1 className='text-xl font-bold'>Description:</h1>
                        <p>{details}</p>
                    </div>
                    {/* get premium access */}
                    <div className='flex justify-center'>
                        <Link to={`/checkOut/${id}`}>
                            <button type="button" className="relative px-8 py-4 ml-4 overflow-hidden rounded font-bold bg-amber-400 hover:bg-amber-500  text-gray-900">
                                Get premium access.
                                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-purple-700">New</span>
                            </button>
                        </Link>
                    </div>
                    <div className='flex justify-around'>
                        <p className='font-bold'><u>Share</u></p>
                        <p className='font-bold'><u>Gift this Course</u></p>
                        <p className='font-bold'><u>apply Coupon</u></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;