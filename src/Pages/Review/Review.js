import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const { _id, title, price, details, image } = useLoaderData();
    const handleRating = (event) => {
        const ratings = parseInt(event.target.name);
        setRating(ratings)
    }
    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const ratings = rating;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message,
            ratings
        }

        fetch('https://service-review-server-side-delta.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('review-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('reviewed successfully')
                    form.reset();
                }
            })
            .then(error => console.log(error));
    }

    return (
        <div className='w-3/4 mx-auto'>
            <h2 className="text-4xl">You are about to review: {title}</h2>
            <h3 className='m-5'>{details}</h3>
            <img src={image} className='w-1/2' alt="" />
            <h2 className='text-5xl text-center'>Give Your Review</h2>
            <form onSubmit={handlePlaceReview} className='mb-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name="firstName" type="text" placeholder="Name" className="input input-ghost w-full input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <textarea name="message" className="textarea textarea-bordered h-24 my-5" placeholder="Your Review" required></textarea>
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
                <input className='btn btn-error my-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Review;