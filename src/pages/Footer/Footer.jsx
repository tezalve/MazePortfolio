import { faFacebookF, faGithub, faKaggle, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center border-top border-secondary p-5'>
            <div style={{ color: 'slateblue' }} className='d-flex justify-content-center pb-5 px-5'>
                <div className='px-5'>
                    <Link to={'https://www.facebook.com/MAZEaktiv'}><FontAwesomeIcon icon={faFacebookF} /></Link>
                </div>
                <div className='px-5'> 
                    <Link to={'https://www.linkedin.com/in/MAZEaktiv/'}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                </div>
            </div>
            <div style={{ color: 'khaki' }}>Copyright @ 2023 estiaq</div>
        </div>
    );
};

export default Footer;