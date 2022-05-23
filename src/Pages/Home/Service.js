import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Purchase from '../Purchase/Purchase';


const Service = ({ service }) => {
    const { id, name, img, description, price, quantityAvailable } = service;
    const navigate = useNavigate();
    const navigateToPurchaseDetail = id => {
        navigate(`/service/${id}`)

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
                <p>id: {id}</p>
                <p>Q-Available: {quantityAvailable}</p>

                <div className="card-actions">
                    <button onClick={() => navigateToPurchaseDetail(id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;