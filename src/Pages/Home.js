import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicTitle from '../hooks/DynamicTitle';
import ServiceCard from './Services/ServiceCard';

const Home = () => {
    DynamicTitle('Home');
    const banner1 = "https://i.ibb.co/H2cgsw5/enterprise-software-development.png"
	const banner2 = "https://i.ibb.co/HLSBr3b/server-setup.png"
	const banner3 = "https://i.ibb.co/J5KXBkw/1513057150-nd-FG392-CJi-service-body-image-software-consultancy.png"
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-side-delta.vercel.app/home_services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} alt='' className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} alt='' className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} alt='' className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner1} alt='' className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
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