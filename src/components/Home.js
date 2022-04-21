import React from 'react';
import Fruits from './fruits';
import Cars from './Cars';
import User from '../userComp/User';




const Home = () => {
    return (
        <div>
            <User />
            <hr/>
            <Cars   car = 'Honda' color='Yellow' />
            <Cars   car = 'Toyota' color='Purple' />
            <Fruits fruit ='Apple'color='Red' />
            <Fruits fruit = 'Mango' color= 'Green' />
            <Fruits fruit = 'Pineapple' color='Blue' />
            <hr/>
            <User  name = 'mary' age = '13' sex = 'female' location = 'lagos'/>
            
            
        </div>
    );
}

export default Home;
