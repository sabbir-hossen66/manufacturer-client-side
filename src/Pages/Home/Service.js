import React from 'react';
import { useNavigate } from 'react-router-dom';



const Service = ({ service }) => {
    const { _id, name, img, description, price, quantityAvailable } = service;
    const navigate = useNavigate();
    const navigateToPurchaseDetail = id => {
        navigate(`/service/${_id}`)

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto text-center">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>id: {_id}</p>
                <p>Q-Available: {quantityAvailable}</p>

                <div className="card-actions">
                    <button onClick={() => navigateToPurchaseDetail(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;