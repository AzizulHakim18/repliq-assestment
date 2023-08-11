import React from 'react';
import Header from '../Sheared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;