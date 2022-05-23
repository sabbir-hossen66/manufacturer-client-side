import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-purple-500 mx-auto text-center text-3xl font-bold my-5'>Service Detail Show: {serviceId}</h2>
        </div>
    );
};

export default Purchase;