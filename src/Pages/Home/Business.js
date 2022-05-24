import React from 'react';
import business from '../../images/business.png'
import { FcBusiness } from "react-icons/fc";
import { GiShadowFollower } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";

const Business = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row">
                <img src={business} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-3 font-serif">Business Summary</h1>
                    <ul className='ml-4'>
                        <li> <p className='text-orange-500 font-bold'><span className='text-3xl'><FcBusiness></FcBusiness></span> Business Project: <span className='text-purple-600'>210k</span></p></li>
                        <li>
                            <p>
                                <span className='text-3xl'><GiShadowFollower></GiShadowFollower></span> <span className='text-orange-500 font-bold'>Our followers: <span className='text-purple-600'>6800k</span></span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className='text-3xl'><MdFeedback></MdFeedback></span> <span className='text-orange-500 font-bold'>Feedbacks: <span className='text-purple-600'>945k</span></span>
                            </p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Business;