import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'

const Register = () => {
    //states
    const [error, setError] = useState('')
    const [accept, setAccept] = useState(false)

    //hooks and destructured data.
    const navigate = useNavigate()
    const { createUser, signInwithGoogle, signInwithGithub, updateUserProfile, varifyEmail } = useContext(AuthContext)

    //handler 
    //1
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.PhotoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        //console.log(name, photoUrl, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
                setError('')
                handleUpdateUserProfile(name, photoUrl)
                handleEmailVerification()

            })
            .catch(error => {
                toast.error(error.message)
                console.error(error)
                setError(error.message);
            })
    }
    //2
    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('profile updated');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }
    //3
    const handleEmailVerification = () => {
        varifyEmail()
            .then(() => {
                toast.success('Registration Successful!!! A verificatin mail sent to your e-mail, please verify!!!')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }
    //4
    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/')
                toast.success('Successfully registered with Google')
            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message)
            })
    }
    const handleGithubSignIn = () => {
        signInwithGithub()
            .then(result => {
                console.log(result.user);
                navigate('/')
                toast.success('Successfully registered with Github')
            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message)
            })
    }
    //
    const handleAccepted = (e) => {
        console.log('clicked');
        setAccept(e.target.checked)
    }
    return (
        <div className='flex justify-center items-center py-8'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='Name' className='block mb-2 text-sm'>
                                Full name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='PhotoURL' className='block mb-2 text-sm'>
                                PhotoURL
                            </label>
                            <input
                                type='text'
                                name='PhotoURL'
                                id='PhotoURL'
                                placeholder='Enter Your PhotoURL Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                required
                            />
                        </div>
                        <p className='text-lg text-red-500'>{error}</p>
                        <div className="flex items-center">
                            <input type="checkbox" onClick={handleAccepted} name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                            <label htmlFor="remember" className="text-sm dark:text-gray-400">
                                I accept <Link className='text-blue-500' to='/'>Terms & condition</Link>
                            </label>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center space-x-4'>
                    <button onClick={handleGoogleSignIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 fill-current'
                        >
                            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                        </svg>
                    </button>
                    <button onClick={handleGithubSignIn} aria-label='Log in with GitHub' className='p-3 rounded-sm'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 fill-current'
                        >
                            <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
                        </svg>
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account yet?{' '}
                    <Link to='/login' className='hover:underline text-gray-600'>
                        Sign In
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default Register