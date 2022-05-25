import React from 'react';

const ManageCart = ({ service, index }) => {
    const { name, price } = service;
    return (


        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>

            <td><button class="btn btn-xs">Delete</button></td>
        </tr>

    );
};

export default ManageCart;