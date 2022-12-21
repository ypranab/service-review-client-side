import React from 'react';

const MyReviewData = ({ review }) => {
    const { serviceName, price, customer, message } = review;
    return (
        <div className="flex items-center space-x-3">
            <h3 className="text-xl font-bold">{customer}</h3>
            <h3 className="text-xl opacity-50">{serviceName}</h3>
            <h3 className="text-sm opacity-50">{price}</h3>
            <h3 className="text-sm opacity-50">{message}</h3>
        </div>
    );
};

export default MyReviewData;