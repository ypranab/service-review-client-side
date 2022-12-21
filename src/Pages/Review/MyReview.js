import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DynamicTitle from '../../hooks/DynamicTitle';
import MyReviewData from './MyReviewData';

const MyReview = () => {
    DynamicTitle('Reviews')
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    return (
        <div>
            <h2 className="text-5xl">You have {reviews.length} reviews</h2>
            <div className="overflow-x-auto w-full">
                {
                    reviews.map(review => <MyReviewData
                        key={review._id}
                        review={review}
                    ></MyReviewData>)
                }
            </div>
        </div>
    );
};

export default MyReview;