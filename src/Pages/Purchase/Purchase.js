import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {

    const [user] = useAuthState(auth)


    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceId, isReload])
    let { name, price, img, description, minimumQuantity, availableQuantity } = service;

    //---quantity-----

    const handleForm = (event) => {
        event.preventDefault();

        let updatedQuantity = parseInt(event.target.name.value);
        availableQuantity = minimumQuantity + updatedQuantity;
        const updatedService = { availableQuantity };

        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                event.target.reset();
                setIsReload(!isReload)
            });
    };

    const handleDeliver = () => {
        const quantity = parseInt(service.quantity) - 1;
        const updatedService = { quantity };

        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const proceed = window.confirm("Deliver parts?");
                if (proceed) {
                    setIsReload(!isReload)
                }
            });
    }

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


                <div class=" justify-end">
                    <form onSubmit={handleForm} className='text-center border-orange-600 text-blue-700 font-bold' >
                        {/* <input className="input-secondary max-w-xs" name="name" type="number" /> */}
                        <input type="number" name="name" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input
                            className="restock my-2 mx-1 rounded-lg btn btn-secondary btn-outline font-bold"
                            type="submit"
                            value="Quantity update"
                        />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Purchase;