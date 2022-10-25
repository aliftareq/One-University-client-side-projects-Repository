import React from 'react';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Staticstics from '../Stats/Staticstics';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div className='mx-6 my-8'>
            <Header></Header>
            <Feature></Feature>
            <Team></Team>
            <Staticstics></Staticstics>
        </div>
    );
};

export default Home;