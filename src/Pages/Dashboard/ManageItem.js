import React, { useEffect, useState } from 'react';
import ManageCart from './ManageCart';

const ManageItem = ({ index }) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-spire-60983.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //---
    const handleOrderCancel = (id) => {
        const proceed = window.confirm("Delete product from your orders?");
        if (proceed) {
            fetch(`https://still-lowlands-64974.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = services.filter((service) => service._id !== id);
                    setServices(remaining);

                });
        }
    };




    return (
        <div>
            <h2 className='text-3xl text-center text-purple-500 font-bold font-mono'>manage item</h2>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            services?.map((service, index) => <ManageCart
                                key={service._id}
                                service={service}
                                index={index}
                                handleOrderCancel={handleOrderCancel}
                            ></ManageCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;