import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TopRated from '../TopRated/TopRated';
import Feedback from '../Feedback/Feedback';
import './Home.css';
/* --------------------------------------------
 -----Showing home component------------
 ---------------------------------------------*/
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <h1>Our Services</h1>
            <Services></Services>
            <h1>Feedback from Patients</h1>
            <Feedback></Feedback>
            <h1>Top Rated Surgeons</h1>
            <TopRated></TopRated>
        </div>
    );
};

export default Home;