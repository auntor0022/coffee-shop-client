import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import Banner from './Banner';

const Home = () => {

    const Initialoffees = useLoaderData();
    // console.log(coffees);
    const [coffees, setCoffees] = useState(Initialoffees);

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='container mx-auto grid grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;