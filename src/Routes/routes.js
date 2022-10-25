import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/CoursesPage/Courses/Courses";
import Home from "../Pages/HomePage/Home/Home";
import Login from '../Pages/AuthenticationPage/LoginPage'
import Register from '../Pages/AuthenticationPage/RegisterPage'
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { Blog } from "../Pages/BlogPage/Blog/Blog";
import FAQ from '../Pages/FAQPage/FAQ/FAQ'

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <Register></Register>
            },
        ]
    },
]);