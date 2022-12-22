import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewData = ({ review, handleDelete, handleUpdate }) => {
    const { _id, serviceName, ratings, customer, message } = review;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>Reviewer: {customer}</p>
                <p>{message}</p>
                <p>Rating: {ratings}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    <Link to={`/updated-reviews/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewData;