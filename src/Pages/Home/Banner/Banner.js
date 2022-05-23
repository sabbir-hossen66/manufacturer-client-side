import React from 'react';
import photo from '../../../images/banner.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Parts Of Computer</h1>
                    <p className="mb-5">We make all the computer parts here and transfer them for careful use..</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;