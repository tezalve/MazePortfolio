import React, { useContext, useRef } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import { refContext } from '../../layouts/Main';
import Contact from '../Contact/Contact';
import './Home.css'


const Home = () => {

    const { home, about, portfolio, service, contact } = useContext(refContext);

    return (
        <div className='background stitch-footer'>
            
            {/* Banner Section */}
            <div ref={home} className='py-5'>
                <Banner />
            </div>

            {/* About Section */}
            <div ref={about} className='text-center pt-5 embroidered-heading'>
                <h2>{" {/} "}</h2>
            </div>
            <div className='pb-5'>
                <About />
            </div>

            {/* Portfolio Section */}
            <div ref={portfolio} className='text-center pt-5 embroidered-heading'>
                <h2>{" (!) "}</h2>
            </div>
            <div className='pb-5'>
                <Portfolio />
            </div>

            {/* Services Section */}
            <div ref={service} className='text-center pt-5 embroidered-heading'>
                <h2>{" {#} "}</h2>
            </div>
            <div className='pb-5'>
                <Service />
            </div>

            {/* Contact Section */}
            <div ref={contact} className='text-center pt-5 embroidered-heading'>
                <h2>{" {*} "}</h2>
            </div>
            <div className='pb-5'>
                <Contact />
            </div>

        </div>
    );
};

export default Home;