import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/logo/Logo';
import Nav from '../components/nav/index';
import Routes from './Routes';
import Footer from '../components/footer/index';

export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>