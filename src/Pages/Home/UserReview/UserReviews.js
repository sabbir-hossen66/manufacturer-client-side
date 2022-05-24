import React, { useState } from 'react';
import UserReview from './userReview/UserReview';

const UserReviews = () => {
    const [userReviews, setUserReviews] = useState([])
    fetch('http://localhost:5000/myReview')
        .then(res => res.json())
        .then(data => setUserReviews(data))
    return (
        <div className='py-10 bg-amber-100'>
            <h1 className='text-3xl text-green-500 font-bold text-center font-serif mb-5'>User Review</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    userReviews.map(userReview => <UserReview key={userReview._id}
                        userReview={userReview}>
                    </UserReview>)

                }
            </div>
        </div>
    );
};

export default UserReviews;