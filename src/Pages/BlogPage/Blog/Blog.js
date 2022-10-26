import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="lg:w-3/4 mx-auto sm:mx-auto bg-white p-6 rounded">
                <div className="flex flex-col mb-16 sm:text-center">
                    <a href="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                            </span>
                            <span className="text-green-500">EXPLORE</span> <br />
                            SOME IMPORTANT CONCEPT
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            These Concepts are about <strong>Private Routes</strong> and <strong>Authentication</strong>. You will get the core-knowledge of these topic from these answer.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <Item title="What is cors?">
                        Cross-Origin Resource Sharing <strong>(CORS)</strong> is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </Item>
                    <Item className='' title="Why are you using firebase? What other options do you have to implement authentication?">
                        The Firebase Realtime Database <strong>lets you build rich, collaborative applications by allowing secure access</strong> to the database directly from client-side code.
                        <br />
                        <strong>The other options for Authentications are...</strong>
                        <ul>
                            <li>1.Back4App</li>
                            <li>2.Backendless</li>
                            <li>3.Kuzzle</li>
                            <li>4.Pubnub</li>
                            <li>5.Appwrite</li> etc.
                        </ul>
                    </Item>
                    <Item title="How does the private route work?">
                        The private route component is similar to the public route, the only change is that <strong>redirect URL and authenticate condition.</strong> If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Item>
                    <Item title="What is Node? How does Node work?">
                        <strong>Node.js</strong> is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine.
                        <br />
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. <strong> Node. js runs on chrome v8 engine which converts javascript code into machine code</strong>, it is highly scalable, lightweight, fast, and data-intensive
                    </Item>
                </div>
            </div>
        </div>
    );
};