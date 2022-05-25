import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url = `https://peaceful-spire-60983.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('user Updated susccessfully');
            })

    };

    return (
        <div className='container'>
            <h3 className='text-center text-primary font-bold text-2xl mt-5 mb-5'>Your iteam Well be add on Home Page</h3>

            <form className='bg-slate-200 text-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-5  mt-5 rounded-xl' placeholder='Name'  {...register("name", { required: true, maxLength: 15 })} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Description' {...register("description")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Available Quantity' type="number" {...register("availableQuantity")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Minimum Quantity' type="number" {...register("minimumQuantity")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Price' type="number" {...register("price")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Image Link' type="text" {...register("img")} /> <br />
                <input className='btn btn-primary mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddProduct;