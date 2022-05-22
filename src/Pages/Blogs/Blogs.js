import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div>
            <marquee behavior="" direction="up"> <h2 className='text-3xl mx-auto text-center text-blue-600 font-medium my-3'>Some important questions and answers</h2></marquee>

            <div className='body-style mt-5'>
                <h1 className='question-title text-3xl'>Ans To The Question</h1>
                <div className='container question-ans-part ml-5'>
                    <h3 className='text-orange-500 text-xl'>1.How will you improve the performance of react application ?</h3><br />

                    <p>Ans: </p>

                </div>
                <div className='container question-ans-part ml-5  my-4'>
                    <h3 className='text-orange-500 text-xl'>2.What are the different ways to mange a state in a react application ?</h3>



                </div>

                <div className='container question-ans-part ml-5  my-4'>
                    <h3 className='text-orange-500 text-xl'>3.How does prototypical inheritance work ?</h3>


                </div>
                <div className='container question-ans-part ml-5  my-4'>
                    <h3 className='text-orange-500 text-xl'>4.Why you do not set the state directly in react ?</h3>


                </div>
                <div className='container question-ans-part ml-5  my-4'>
                    <h3 className='text-orange-500 text-xl'>5.You have an array of products.Each Object has a name,price,description,etc...How will you implement a search to find products by name ?</h3>


                </div>
                <div className='container question-ans-part ml-5  my-4'>
                    <h3 className='text-orange-500 text-xl'>6.What is unit test ? Why should write unit test ?</h3>


                </div>

            </div>
        </div>
    );
};

export default Blogs;