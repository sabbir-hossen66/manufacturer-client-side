import React from 'react';
import { useParams } from 'react-router-dom';
import useQuery from 'use-query';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `https://peaceful-spire-60983.herokuapp.com/orders/${id}`;

    const { data: payment, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Payment ;{id}</h2>
            <div>
                <div class="card w-96 bg-neutral text-white my-4">
                    <div class="card-body">
                        <p className='font-bold text-orange-500'>Hello,{payment.name}</p>
                        <h2 class="card-title">pay for {payment.treatment}</h2>
                        <p>your appointment <span className='text-green-600'>{payment.date}</span> at {payment.slot}</p>
                        <p>please pay: $<span className='text-green-300'>{payment.price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;