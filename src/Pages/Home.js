import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicTitle from '../hooks/DynamicTitle';
import ServiceCard from './Services/ServiceCard';

const Home = () => {
    DynamicTitle('Home');
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home_services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-5'>
                <p className='text-xl text-orange-600'>Services</p>
                <h2 className='text-5xl'>Our Service Areas</h2>
                <p className='mx-auto w-1/2'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
            <Link to='/services'>
                <button className="btn btn-warning ml-60 my-5">See All</button>
            </Link>
        </div>
    );
};

export default Home;