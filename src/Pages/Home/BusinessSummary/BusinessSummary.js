import React from 'react';
import { Link } from 'react-router-dom';

const BusinessSummary = () => {
    return (
        <div class="hero min-h-screen bg-primary-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Faith is our only capital</h1>
                    <p class="py-6">We believe in truth and our oneness has been able to bring us so far. We always try to make the best product. Even all the workers in our company are working with their best. We have got good feedback from the buyers. We are trying our best to move our company forward. Thank you all for being with us</p>
                    <Link to='/my'> <button class="btn btn-primary">About Ceo</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;