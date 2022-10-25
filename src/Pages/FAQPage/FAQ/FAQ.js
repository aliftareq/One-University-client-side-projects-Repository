import React from 'react';

const FAQ = () => {
    return (
        <div className="px-4 py-16 mx-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-500">
                            Frequently Asked Question
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                        </span>
                        Here are some Frequently asked question by our Visitor.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        You can find the answer of your doubt about our course curriculumn and our term and services.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What do One-University courses include?
                            </p>
                            <p className="text-gray-700">
                                Each One-Universiy course is created, owned and managed by the instructor(s). The foundation of each One-Universiy course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How do I take a One-University course?
                            </p>
                            <p className="text-gray-700">
                                One-Universiy courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.

                                After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your One-Universiy account). You can also begin the course by logging in and navigating to your My learning page.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Is One-University an accredited institution? Do I receive anything after I complete a course?
                            </p>
                            <p className="text-gray-700">
                                While One-University is not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Every approved, paid course features a certificate of completion to document your accomplishment.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Is there any way to preview a course?
                            </p>
                            <p className="text-gray-700">
                                Yes! Learn how to preview a course, and review key information about it. This article outlines how you can search One-Universiy’s ever-growing library, and find courses you’re interested in taking.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What if I don’t like a course I purchased?
                            </p>
                            <p className="text-gray-700">
                                We want you to be satisfied, so all eligible courses purchased on One-Universiy can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Where can I go for help?
                            </p>
                            <p className="text-gray-700">
                                If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor.

                                Our Help Center has extensive information regarding One-Universiy’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;