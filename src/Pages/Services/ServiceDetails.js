import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewDetails from '../Review/ReviewDetails';

const ServiceDetails = () => {
    const { _id, image, title, details } = useLoaderData();

    return (
        <>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Service" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/reviews/${_id}`}>
                            <button className="btn btn-ghost">Give review</button>
                        </Link>
                    </div>
                </div>
            </div>
            <ReviewDetails key={_id} id={_id}></ReviewDetails>
        </>

    );
};

export default ServiceDetails;