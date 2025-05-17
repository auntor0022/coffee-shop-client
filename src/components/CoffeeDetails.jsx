import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {

    const coffee = useLoaderData();
    

    return (
        <div className='container mx-auto mt-12 flex'>
            <img src={coffee.photo} alt="" />
            <h2>Coffe: {coffee.name}</h2>
        </div>
    );
};

export default CoffeeDetails;