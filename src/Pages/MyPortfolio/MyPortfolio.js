import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mx-auto text-center'>
            <h1 className='my-5 text-2xl font-serif text-fuchsia-400 '>This is all about <span className='text-orange-500 font-bold'>My-self</span></h1>

            <div>
                <div class="indicator w-32">
                    <img src="https://i.ibb.co/jG50Bc6/portflio.jpg0" />
                </div>

                <div class="card text-justify w-96 bg-base-100 shadow-xl mx-auto text-center my-2">
                    <div class="card-body">
                        <h2 class="card-title">Name: <span className='text-purple-500'>Sabbir Hossen</span></h2>
                        <h2>Email: <spna className='text-purple-500'>sabbir.ms2000@gmail.com</spna></h2>
                        <h3>Educational Background:<br></br>
                            <span className='text-orange-600'>Studies at B.S.C in honours life Department of Physics</span></h3>
                        <p>List of Technology skills: <br></br>
                            <span className='text-purple-600 font-bold'>React.js Developer || JavaScript Developer && MERN Stack Web Developer</span></p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;