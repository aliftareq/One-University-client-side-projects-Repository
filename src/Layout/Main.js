import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';
import NavBar from '../Pages/NavBar/NavBar';
const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;