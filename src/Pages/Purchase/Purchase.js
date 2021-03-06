import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {

    const [user] = useAuthState(auth)
    const [q, setQ] = useState(0)

    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {
        const url = `https://peaceful-spire-60983.herokuapp.com/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceId, isReload])
    let { name, price, img, description, minimumQuantity, availableQuantity } = service;

    //---quantity-----

    const handleOrder = (e) => {
        e.preventDefault();

        //.................................................
        let orderQ = e.target.number.value;
        console.log(orderQ);
        if (orderQ > minimumQuantity && orderQ < availableQuantity) {
            const address = e.target.address.value;
            const quantity = e.target.number.value;

            const order = {
                name: name,
                address: address,
                quantity: quantity,
                email: user.email,
                price: price
            };
            fetch("https://peaceful-spire-60983.herokuapp.com/orders", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(order),
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    e.target.reset();
                    setIsReload(!isReload);
                });

            // ......................................
            setQ(orderQ);
            availableQuantity = availableQuantity - orderQ;
            const updatedParts = { availableQuantity };
            fetch(`https://peaceful-spire-60983.herokuapp.com/service/${serviceId}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedParts),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        }
        else {
            alert('You cannot order parts less than minimum quantity')
        }
    };


    return (

        <div class="card lg:card-side bg-orange-50 shadow-xl text-center my-6 w-[800px] mx-auto text-center">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h4 className="card-title">Price: {price}</h4>
                <h4 className="card-title">Minimum: {minimumQuantity}</h4>
                <h4 className="card-title">Available: {availableQuantity}</h4>
                <p className="card-title"><small>Des: {description}</small></p>
                <h2 className='card-title text-purple-500 font-bold font-mono text-left'>User-name: {user?.displayName}</h2>
                <h3 className='card-title text-purple-500 font-bold font-mono text-left'>User-email: {user?.email}</h3>

                <form onSubmit={handleOrder}>
                    <input
                        type="text"
                        name="partsName"
                        disabled
                        value={name}
                        class="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />
                    <input
                        type="number"
                        name="number"
                        placeholder='order quantity'
                        class="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        disabled
                        value={user?.email}
                        placeholder="Type here"
                        class="input input-bordered w-full max-w-xs mb-2 font-semibold"
                    />
                    <br />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        class="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Phone Number"
                        class="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />

                    <input
                        type="submit"
                        value="Place Order"
                        class="input input-bordered w-full max-w-xs btn btn-primary"
                    />
                </form>

            </div>
        </div>
    );
};

export default Purchase;