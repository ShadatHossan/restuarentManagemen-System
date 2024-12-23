import React from 'react';
import Banner from '../Banner/Banner';
import Carousels from '../Banner/Carousel';
import useTitle from '../Sheared/Title';
import Featured from './Featured';
import PopularMenu from './PopularMenu';
import RecommendsCard from './RecommendsCard';
import Testimonials from './Testimonials';

const Home = () => {
    useTitle("Home")
    return (
        <div>
         <Carousels></Carousels>
         <Banner></Banner>
         <PopularMenu></PopularMenu>
         <RecommendsCard></RecommendsCard>
         <Featured></Featured>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;