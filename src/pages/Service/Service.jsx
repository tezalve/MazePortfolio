import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import gradient1 from '../../../public/images/gradient1.jpg';
import './Service.css';
import { Fade } from 'react-awesome-reveal';

const Service = () => {
  return (
    <div>
      <div className='text-center'>
        <h1 className='display-1'>
          <span>{'<'}</span>
          <span>services</span>
          <span>{'>'}</span>
        </h1>
        <p style={{ color: "khaki" }}>...the services we provide at MAZE Sourcing;</p>
      </div>

      <div className='text-center'>
        <Fade>
          <h5 className={window.innerWidth < 768 ? 'service-heading-small' : 'service-heading-large'}>
            {/* Garment Sourcing */}
            <div className='service-item' style={{ backgroundImage: `url(${gradient1})` }}>
              {' {" '}
              <TypeAnimation
                sequence={['', '_garment sourcing']}
                wrapper="span"
                cursor={true}
                repeat={1}
                speed={300}
                style={{ display: 'inline-block', color: "slateblue" }}
              />
              {' "} '}
            </div>

            {/* Quality Control */}
            <div className='service-item' style={{ backgroundImage: `url(${gradient1})` }}>
              {' {" '}
              <TypeAnimation
                sequence={['', '_quality control']}
                wrapper="span"
                cursor={true}
                repeat={1}
                speed={300}
                style={{ display: 'inline-block', color: "steelblue" }}
              />
              {' "} '}
            </div>

            {/* Vendor Management */}
            <div className='service-item' style={{ backgroundImage: `url(${gradient1})` }}>
              {' {" '}
              <TypeAnimation
                sequence={['', '_vendor management']}
                wrapper="span"
                cursor={true}
                repeat={1}
                speed={300}
                style={{ display: 'inline-block', color: "khaki" }}
              />
              {' "} '}
            </div>
          </h5>
        </Fade>
      </div>
    </div>
  );
};

export default Service;
