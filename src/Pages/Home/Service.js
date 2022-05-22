import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, price, quantityAvailable } = service;

    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto text-center">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{quantityAvailable}</p>

                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;