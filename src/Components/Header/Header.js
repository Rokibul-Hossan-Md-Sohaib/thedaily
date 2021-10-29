import React from 'react';
import About from '../About/About';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Harold from '../Harold/Harold';
import Navs from '../Navs/Navs';
import Services from '../Sevices/Services';
import Topbar from '../Topbar/Topbar';

const Header = () => {
    return (
        <div>
            <Topbar />
            <Navs />
            <About />
            <Services />
            <Harold />
            <Cards />
            <Footer />
        </div>
    );
};

export default Header;