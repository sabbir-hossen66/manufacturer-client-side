import React from 'react';
import photo from '../../../images/banner.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${photo})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Parts Of Computer</h1>
                    <p class="mb-5">We make all the computer parts here and transfer them for careful use..</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;