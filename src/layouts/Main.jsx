import React, { createContext, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';
import Sidebar from '../pages/Sidebar/Sidebar';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

export const refContext = createContext();

const Main = () => {

    // const [home, setHome] = useState(null);
    // const [about, setAbout] = useState(null);
    // const [portfolio, setPortfolio] = useState(null);
    // const [service, setService] = useState(null);

    const home = useRef(null);
    const about = useRef(null);
    const portfolio = useRef(null);
    const service = useRef(null);
    const contact = useRef(null);

    const value = {home, about, portfolio, contact, service};

    return (
        <div className='row bg-dark g-0'>
            <ToastContainer />
            <div className='col-1'>
                <Sidebar></Sidebar>
            </div>
            <refContext.Provider value={value}>
                <div className='col-11 border-start border-secondary'>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </refContext.Provider>
        </div>
    );
};

export default Main;