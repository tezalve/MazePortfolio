import React, { createContext, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';
import Sidebar from '../pages/Sidebar/Sidebar';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import './Main.css';

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
        <div>
            <ToastContainer />
            <div>
                <Sidebar></Sidebar>
            </div>
            <refContext.Provider value={value}>
                <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </refContext.Provider>
        </div>
    );
};

export default Main;