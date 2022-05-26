import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        const education = e.target.education.value;
        const location = e.target.location.value;
        const phone = e.target.phone.value;
        const linkedin = e.target.linkedin.value;

        const profile = {
            name: user.displayName,
            email: user.email,
            education: education,
            location: location,
            phone: phone,
            linkedin: linkedin,
        };
        fetch(`https://peaceful-spire-60983.herokuapp.com/updateProfile`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Profile info updated')
                e.target.reset();
            })
    }
    return (
        <div className=''>
            <div className=' text-center'>
                <h2 className='text-2xl text-emerald-600 font-semibold font-mono'>This is Profile</h2><br />

                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src="https://i.ibb.co/CMHN6SL/gg-phto.jpg" alt='' />
                    </div>
                </div>

                <h2 className='font-bold text-1xl text-emerald-500 font-mono'>User-Name: <span className='text-purple-400'> {user?.displayName}</span></h2>
                <h2 className='font-bold text-1xl text-emerald-500 font-mono'>User-Email: <span className='text-purple-400'>{user?.email}</span></h2>
            </div>



            <form onSubmit={handleProfileSubmit} className="my-5 mx-auto text-center">
                <input
                    type="text"
                    name="education"
                    placeholder="Educational Qualification"
                    class="input input-bordered w-96 max-w-xs mb-2"
                />
                <br />
                <input
                    type="text"
                    name="location"
                    placeholder="Your Location"
                    class="input input-bordered w-96 max-w-xs mb-2"
                />
                <br />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    class="input input-bordered w-96 max-w-xs mb-2"
                />
                <br />
                <input
                    type="text"
                    name="linkedin"
                    placeholder="Linkedin Profile Link"
                    class="input input-bordered w-96 max-w-xs mb-2"
                />
                <br />
                <input
                    type="submit"
                    value="Submit"
                    class=" btn btn-accent text-white  w-full max-w-xs mb-2"
                />
                <br />
            </form>




        </div>
    );
};

export default Profile;