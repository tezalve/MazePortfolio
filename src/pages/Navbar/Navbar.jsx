import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { refContext } from '../../layouts/Main';
import './Navbar.css';

const Navbar = () => {

    const download = () => {
        fetch('MAZE-Catalog.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'MAZE-Catalog.pdf';
                alink.click();
            })
        })
    }

    const value = useContext(refContext);

    const handleclickhome = () => {
        value.home.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const handleclickabout = () => {
        value.about.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const handleclickportfolio = () => {
        value.portfolio.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const handleclickservice = () => {
        value.service.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const handleclickcontact = () => {
        value.contact.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='navbar-fixed'>
            <nav className="navbar navbar-expand-md stitch-navbar">
                <div className='d-flex flex-row px-1'>
                    <div className='px-2'>
                        <p id='home' className='logo-embroidered'>
                            MAZE<span className=''>sourcing</span>
                        </p>
                    </div>
                </div>
                <button style={{color: 'slateblue'}} className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center d-flex justify-content-between embroidery-text">
                        <li className="nav-item px-3">
                            <NavLink id='home' onClick={handleclickhome} className='text-decoration-none'>
                                home
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink id='about' onClick={handleclickabout} className='text-decoration-none'>
                                about
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink id='portfolio' onClick={handleclickportfolio} className='text-decoration-none'>
                                portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink id='services' onClick={handleclickservice} className='text-decoration-none'>
                                services
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink id='contact' onClick={handleclickcontact} className='text-decoration-none'>
                                contact
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink onClick={download} id='resume' className='text-decoration-none'>
                                brochure
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;