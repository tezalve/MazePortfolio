import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Banner.css';

const Banner = () => {

    console.log(window.innerWidth);
    // public/videos/1.mp4
    const VideoBackground = () => (
        <div className="video-container">
          <video
            className="video-background"
            src="/videos/video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="video-overlay" />
          <div className="video-content">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MAZE Sourcing</h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto">
                Professional sourcing solutions powered by experience, strategy, and vision.
              </p>
            </div>
          </div>
        </div>
      );

    return (
        <div className='text-center'>
            <div className={ window.innerWidth < 768? 'display-5' : 'display-1'}>
                {' {" '}
                <TypeAnimation
                    sequence={[
                        '_knitwear',
                        '_woven',
                        '_kids'
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={100}
                    speed={500}
                    style={{ display: 'inline-block', color: "khaki" }}
                />
                {' "} '}
            </div>
            <VideoBackground />
        </div>
    );
};

export default Banner;