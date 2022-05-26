import React from 'react';
import { Link } from 'react-router-dom';

const BusinessSummary = () => {
    return (
        <div className="hero min-h-screen bg-slate-200 p-3">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Faith is our only capital</h1>
                    <p className="py-6">We believe in truth and our oneness has been able to bring us so far. We always try to make the best product. Even all the workers in our company are working with their best. We have got good feedback from the buyers. We are trying our best to move our company forward. Thank you all for being with us</p>
                    <Link to='/my'> <button className="btn btn-primary">About Ceo</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;