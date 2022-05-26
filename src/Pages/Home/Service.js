import React from 'react';
import { useNavigate } from 'react-router-dom';



const Service = ({ service }) => {
    const { _id, name, img, description, price, minimumQuantity, availableQuantity } = service;
    const navigate = useNavigate();
    const navigateToPurchaseDetail = id => {
        navigate(`/service/${_id}`)

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto text-center mb-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center pb-3">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Min-quantity: {minimumQuantity}</p>
                <p>Available-quantity: {availableQuantity}</p>
                <p>Description: {description}</p>

                <div className="card-actions">
                    <button onClick={() => navigateToPurchaseDetail(_id)} className="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;