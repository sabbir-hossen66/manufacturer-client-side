import React from 'react';

const Error = () => {
    return (
        <div>
            <marquee behavior="alternate" direction="up"> <h2 className='text-red-600 text-4xl font-bold font-serif mx-auto text-center mt-5 py-6'>Sorry This Page Isn't Available</h2></marquee>

            <div class="artboard artboard-horizontal phone-1 mx-auto text-center my-12">
                <img src="https://i.ibb.co/pJjZtw0/error.webp" alt="" />
            </div>
        </div>

    );
};

export default Error;