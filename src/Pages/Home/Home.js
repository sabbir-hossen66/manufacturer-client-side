import React from 'react';
import Banner from './Banner/Banner';
import Business from './Business';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Contact from './Contact';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Business></Business>
            <Contact></Contact>

        </div>
    );
};

export default Home;