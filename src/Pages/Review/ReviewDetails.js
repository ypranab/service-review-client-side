import React, { useEffect, useState } from 'react';

const ReviewDetails = ({ id }) => {
    const [review, setReview] = useState([]);
    const image = 'https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-1/275445093_2433731623424311_8557171193280420878_n.jpg?stp=c55.23.60.60a_cp0_dst-jpg_p120x120&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG-wEv73m53HbOUipjh9_21XViQWnxHJJJdWJBafEckkgTzPj_T6GOLGLJNFM76Tr6ywkvkM3gN2os7bKxRJTGH&_nc_ohc=3_a1QXoWKhsAX9cZ3mj&_nc_ht=scontent.fdac34-1.fna&oh=00_AfDTXMSrUgXnX_CmbrPiraTvTzLhliJ0Pr_oXVk8D1qj7w&oe=63A63A3C'
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])

    return (
        <div className="hero min-h-min my-5 w-1/2 mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{review.serviceName}</h1>
                    <p className="py-2 text-xl font-bold">{review.message}</p>
                    <p className="py-2 text-xl font-bold">Customer: {review.customer}</p>
                    <p className="py-2 text-xl font-bold">Rating: {review.ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;