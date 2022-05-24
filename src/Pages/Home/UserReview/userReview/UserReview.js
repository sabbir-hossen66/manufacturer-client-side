import React from 'react';

const UserReview = ({ userReview }) => {
    let { name, email, review } = userReview;
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name :{name}</h2>
                    <h2 class="card-title">Email :{email}</h2>
                    <p>Review: {review}</p>

                </div>
            </div>
        </div>
    );
};

export default UserReview;