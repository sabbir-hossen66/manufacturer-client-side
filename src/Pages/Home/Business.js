import React from 'react';
import business from '../../images/business.png'
import { FcBusiness } from "react-icons/fc";
import { GiShadowFollower } from "react-icons/gi";
import { FcFeedback } from "react-icons/fc";

const Business = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row">
                <img src={business} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-3 font-serif">Business Summary</h1>
                    <div className='ml-4 font-mono'>

                        <div className='flex items-center '>
                            <span className='text-5xl mr-2'><FcBusiness></FcBusiness>
                            </span>
                            <p className='text-orange-500 font-bold text-3xl'> Business Project: <span className='text-purple-600 '>210k</span></p>
                        </div>

                        <div className='flex items-center '><span className='text-5xl mr-2'><GiShadowFollower></GiShadowFollower></span>
                            <p className='text-3xl'>
                                <span className='text-orange-500 font-bold'>Our followers: <span className='text-purple-600'>6800k</span></span>
                            </p>
                        </div>
                        <div className='flex items-center'>  <span className='text-5xl mr-2'><FcFeedback>
                        </FcFeedback></span>
                            <p className='text-3xl'>
                                <span className='text-orange-500 font-bold'>Feedbacks: <span className='text-purple-600'>945k</span></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Business;