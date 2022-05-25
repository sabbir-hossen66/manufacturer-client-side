import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';



const Users = () => {
    // const { data: users, isLoading, refetch } = useQuery('users', () =>

    //     fetch('https://peaceful-spire-60983.herokuapp.com/user', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }



    //----asad vai
    const { data: users, isLoading, refetch } = useQuery('users', () =>

        fetch('https://peaceful-spire-60983.herokuapp.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users);

    return (
        <div>
            <h2 className='text-purple-500 text-2xl font-mono'>All Users  here :{users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}>

                            </UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;