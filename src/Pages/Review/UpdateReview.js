import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const [reviews, setReviews] = useState(storedReview);

    const { _id, service, message, email, customer, serviceName } = storedReview;

    const [rating, setRating] = useState(0);

    const handleRating = (event) => {
        const ratings = parseInt(event.target.name);
        setRating(ratings)
    }
    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        reviews[field] = value;
        setReviews(reviews);
    }
    const handleUpdate = (service) => {
        fetch(`https://service-review-server-side-delta.vercel.app/reviews/${service}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('review-token')}`
            },
            body: JSON.stringify({ serviceName: reviews.serviceName, message: reviews.message })
        })
            .then(res => res.json())
            .then(data => { setReviews(data) })
    }

    return (
        <div>
            <div className='w-3/4 mx-auto'>
                <h2 className='text-5xl text-center'>Update Your Review : {serviceName}</h2>
                <form className='mb-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                        <input onChange={handleChange} name="customer" type="text" defaultValue={customer} placeholder="Name" className="input input-ghost w-full input-bordered" />
                        <input name="email" type="text" placeholder="Your email" defaultValue={email} className="input input-ghost w-full input-bordered" readOnly />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <textarea onChange={handleChange} name="message" className="textarea textarea-bordered h-24 my-5" placeholder="Your Review" defaultValue={message} required></textarea>
                    </div>
                    <span className='text-2xl'>Rate the Service </span>
                    <div className="rating" onChange={handleRating}>
                        <input type="radio" name="1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <br />
                    <input onSubmit={() => handleUpdate(service)} className='btn btn-error my-5' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;