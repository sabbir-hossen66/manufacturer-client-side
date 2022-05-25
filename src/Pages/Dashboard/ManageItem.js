import React, { useEffect, useState } from 'react';
import ManageCart from './ManageCart';

const ManageItem = ({ index }) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-spire-60983.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl'>manage item</h2>
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
                            ></ManageCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;