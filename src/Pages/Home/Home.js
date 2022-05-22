import React from 'react';
import Banner from './Banner/Banner';
import Business from './Business';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Contact from './Contact';
import Services from './Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BusinessSummary></BusinessSummary>
            <Business></Business>
            <Contact></Contact>

        </div>
    );
};

export default Home;