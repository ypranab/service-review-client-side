import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, image, title, details } = service;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 150)}.......</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-error">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;