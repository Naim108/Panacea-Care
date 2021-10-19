import React from 'react';
import Price from '../../Price/Price';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors/Doctors';
import Services from '../Services/Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Price></Price>
            <Footer></Footer>
        </div>
    );
};

export default Home;