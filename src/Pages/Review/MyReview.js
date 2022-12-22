import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DynamicTitle from '../../hooks/DynamicTitle';
import MyReviewData from './MyReviewData';

const MyReview = () => {
    DynamicTitle('Reviews')
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://service-review-server-side-delta.vercel.app/reviews?email=${user?.email}`, {
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

    const handleDelete = id => {
        const proceed = window.confirm('You are about to delete this review');
        if (proceed) {
            fetch(`https://service-review-server-side-delta.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('review-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(item => item._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='w-3/4 mx-auto mb-6'>
            <h2 className="text-5xl text-center my-5">You have {reviews.length} reviews</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <MyReviewData
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></MyReviewData>)
                }
            </div>
        </div>
    );
};

export default MyReview;