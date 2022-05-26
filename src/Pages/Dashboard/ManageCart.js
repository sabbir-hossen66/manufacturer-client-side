import React from 'react';

const ManageCart = ({ service, index, handleOrderCancel }) => {
    const { name, price } = service;
    return (


        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>

            <td><button class="btn btn-xs" onClick={() => handleOrderCancel(service._id)}>Delete</button></td>
        </tr>

    );
};

export default ManageCart;