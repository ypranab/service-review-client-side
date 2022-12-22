import React, { useEffect, useState } from 'react';
import DynamicTitle from '../../hooks/DynamicTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    DynamicTitle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-side-delta.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-5'>
                <p className='text-xl text-orange-600'>Services</p>
                <h2 className='text-5xl'>Our Service Areas</h2>
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
        </div>
    );
};

export default Services;