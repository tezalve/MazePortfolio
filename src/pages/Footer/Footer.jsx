import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer text-center border-secondary p-5 background-footer'>
            {/* Social Icons */}
            <div className='social-icons d-flex justify-content-center pb-5 px-5'>
                <div className='px-4'>
                    <a href='https://www.facebook.com/MAZEaktiv' target="_blank" rel="noreferrer" className='social-link'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
                <div className='px-4'>
                    <a href='https://www.linkedin.com/in/MAZEaktiv/' target="_blank" rel="noreferrer" className='social-link'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className='footer-text embroidered-text'>
                Copyright © 2023 Maze Sourcing BD
            </div>
        </div>
    );
};

export default Footer;