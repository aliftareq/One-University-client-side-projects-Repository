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
import CourseDetails from "../Pages/CoursesPage/CourseDetails/CourseDetails";
import CheckOut from "../Pages/CoursesPage/CheckOut/CheckOut";

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
            {
                path: '/Course-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkOut/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CheckOut></CheckOut>
            }
        ]
    },
]);