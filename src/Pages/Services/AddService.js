import React, { useState } from 'react';
import DynamicTitle from '../../hooks/DynamicTitle';

const AddService = () => {
    DynamicTitle('Add Service');
    const [rating, setRating] = useState(0);
    const handleRating = (event) => {
        const ratings = parseInt(event.target.name);
        setRating(ratings)
    }
    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const service = form.service.value;
        const price = form.price.value;
        const details = form.details.value;
        const url = form.url.value;
        const ratings = rating;

        const newSerivce = {
            title: service,
            price: price,
            rating: ratings,
            details: details,
            image: url
        }

        fetch('https://service-review-server-side-delta.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('review-token')}`
            },
            body: JSON.stringify(newSerivce)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service added successfully')
                    form.reset();
                }
            })
            .then(error => console.log(error));
    }

    return (
        <div className="form-control w-1/2 mx-auto mb-10">
            <label className="label mx-auto">
                <span className="label-text text-4xl font-bold">ADD Your Service</span>
            </label>
            <form onSubmit={handlePlaceService}>
                <label className="input-group input-group-vertical mb-5">
                    <span>Service Name</span>
                    <input type="text" name='service' placeholder="Service Name" className="input input-bordered" />
                </label>
                <label className="input-group input-group-vertical mb-5">
                    <span>Price</span>
                    <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                </label>
                <label className="input-group input-group-vertical mb-5">
                    <span>Company</span>
                    <input type="text" placeholder="Company" className="input input-bordered" />
                </label>
                <label className="input-group input-group-vertical mb-5">
                    <span>Details</span>
                    <input type="text" name='details' placeholder="Details" className="input input-bordered" />
                </label>
                <label className="input-group input-group-vertical mb-5">
                    <span>Photo URL</span>
                    <input type="text" name='url' placeholder="URL" className="input input-bordered" />
                </label>

                <div className="rating" onChange={handleRating}>
                    <span>Rating of service -</span>
                    <input type="radio" name="1" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="3" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="4" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="5" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className='flex justify-end'>
                    <div>
                        <input type="submit" className='btn btn-error mx-auto' value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;