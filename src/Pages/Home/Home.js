import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer></Footer>

        </div>
    );
};

export default Home;