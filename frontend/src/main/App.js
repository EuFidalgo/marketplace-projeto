import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/topBar';
import { Navigation } from '../components/nav';
import Routes from '../routes/index';
import Footer from '../components/footer/index';

export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <Navigation />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter> 