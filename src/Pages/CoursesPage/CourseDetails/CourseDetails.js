import React from 'react';
import { FcPrint, FcClock } from 'react-icons/fc';
import { FiYoutube } from 'react-icons/fi';
import { RiArticleLine } from 'react-icons/ri';
import { HiOutlineFolderDownload } from 'react-icons/hi';
import { CgInfinity } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { GiTrophyCup } from "react-icons/gi";

const CourseDetails = () => {
    return (
        <div className='mx-8 my-8'>
            <div className="  py-4 shadow-md bg-white text-gray-700 rounded-md">
                <div className=' flex justify-center items-center bg-amber-500 my-4 p-4 text-center'>
                    <h1 className='text-2xl lg:text-4xl font-bold'> Learn Python in 30 days</h1> <FcPrint className='mx-8 text-4xl lg:text-6xl' />
                </div>
                <div className=" p-4 lg:w-2/4 mx-auto space-y-4">
                    {/* title image */}
                    <div className="space-y-2">
                        <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    {/* prices */}
                    <div className="space-y-2">
                        <span className="text-5xl font-bold">$24</span>
                        <span className='text-2xl mx-2'><del>$84.99</del></span>
                        <span className='text-2xl ms-2'>84% off</span>
                    </div>
                    <div className='flex items-center'>
                        <FcClock />
                        <p className='mx-2 text-red-500'><span className='font-bold'>5 hours</span> left at this price!</p>
                    </div>
                    {/* Features */}
                    <div>
                        <h1 className='text-xl font-bold'>This course includes:</h1>
                        <div className='flex items-center'>
                            <FiYoutube />
                            <p className='mx-4'>14 hours on-demand video</p>
                        </div>
                        <div className='flex items-center'>
                            <RiArticleLine />
                            <p className='mx-4'>1 article</p>
                        </div>
                        <div className='flex items-center'>
                            <HiOutlineFolderDownload />
                            <p className='mx-4'>3 downloadable resources</p>
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
                        <p>Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

                            If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!

                            Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.

                            The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!</p>
                    </div>
                    {/* get premium access */}
                    <div className='flex justify-center'>
                        <button type="button" className="relative px-8 py-4 ml-4 overflow-hidden rounded font-bold bg-amber-400 hover:bg-amber-500  text-gray-900">
                            Get premium access.
                            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-purple-700">New</span>
                        </button>
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