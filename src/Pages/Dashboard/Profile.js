import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='mx-auto text-center'>
            <h2 className='text-2xl text-emerald-600 font-semibold font-mono'>This is Profile</h2><br />

            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img src="https://i.ibb.co/CMHN6SL/gg-phto.jpg" alt='' />
                </div>
            </div>

            <h2 className='font-bold text-1xl text-emerald-500 font-mono'>User-Name: <span className='text-purple-400'> {user?.displayName}</span></h2>
            <h2 className='font-bold text-1xl text-emerald-500 font-mono'>User-Email: <span className='text-purple-400'>{user?.email}</span></h2>
        </div>
    );
};

export default Profile;