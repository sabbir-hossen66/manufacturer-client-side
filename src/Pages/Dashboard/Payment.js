import React from 'react';
import { useParams } from 'react-router-dom';
import useQuery from 'use-query';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51KzgdMJVa6zVY99CaGts94G8qqJirQWPMAET7VBqrec0wWSxhuuRtgQNPA3SuwzjQKOv6QWwjgMWEfZ83N1qLNUU00IX1ciL6e');

const Payment = () => {
    const { id } = useParams();
    const url = `https://peaceful-spire-60983.herokuapp.com/orders/${id}`;

    const { data: purchase, isLoading } = useQuery(['orders', id], () => fetch(url, {
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
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {purchase.name}</p>
                    <h2 class="card-title">Please Pay for {purchase.price}</h2>
                    {/* <p> myOrders: <span className='text-orange-700'>{data.date}</span> at {data.slot}</p>
                    <p>Please pay: ${data.price}</p> */}
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                /* <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div> */
            </div>
        </div>
    );
};

export default Payment;