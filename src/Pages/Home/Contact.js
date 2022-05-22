import React from 'react';
import './Contact.css'

import { FaAddressBook } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr'
import { FaUserCircle } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';


const Contact = () => {
    return (
        <div className='pb-10 bg-slate-200'>
            <h1 className='text-3xl text-orange-500 font-cursive mx-auto text-center font-bold'>Contact Us</h1>

            <div className='ml-12'>
                <h2 className='text-2xl font-bold text-orange-500'><FaAddressBook></FaAddressBook> Address</h2>
                <ul>
                    <li className='font-semibold '>Rajbari,Dhaka 12/1204,Niklo Town <br />
                        /new kochukhet,Bangladesh
                    </li>
                    <h2 className='text-2xl font-bold text-orange-500'><BsTelephoneFill></BsTelephoneFill> Phone No</h2>
                    <li className=' font-semibold'>
                        +4654264564876 <br />
                        456789647895241
                    </li>
                    <h2 className='text-2xl font-bold text-orange-500'><GrMail></GrMail> Mail</h2>
                    <li className=' font-semibold'>
                        Your Mail.dhaka@gmail.com <br />
                        Houserent.rajbari@domain.com
                    </li>
                    <h2 className='text-2xl font-bold text-orange-500'><FaUserCircle></FaUserCircle> Social Account</h2>
                    <li className='text-3xl'>
                        <BsFacebook></BsFacebook> <AiFillTwitterCircle></AiFillTwitterCircle> <ImLinkedin></ImLinkedin>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;