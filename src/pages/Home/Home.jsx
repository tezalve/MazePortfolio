import React, { useContext, useRef } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import { refContext } from '../../layouts/Main';
import Contact from '../Contact/Contact';


const Home = () => {

    const {home, about, portfolio, service, contact} = useContext(refContext);

    return (
        <div className='text-white'>
            <div ref={home} className='py-5'>
                <Banner></Banner>
            </div>
            <div ref={about} className='text-center pt-5' style={{ color: "slateblue" }}>
                <h2>{" {/} "}</h2>
            </div>
            <div className='pb-5'>
                <About></About>
            </div>
            <div ref={portfolio} className='text-center pt-5' style={{ color: "slateblue" }}>
                <h2>{" (!) "}</h2>
            </div>
            <div className='pb-5'>
                <Portfolio></Portfolio>
            </div>
            <div ref={service} className='text-center pt-5' style={{ color: "slateblue" }}>
                <h2>{" {#} "}</h2>
            </div>
            <div className='pb-5'>
                <Service></Service>
            </div>
            <div ref={contact} className='text-center pt-5' style={{ color: "slateblue" }}>
                <h2>{" {*} "}</h2>
            </div>
            <div className='pb-5'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;