import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { RiAdminFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { FaFirstOrderAlt } from 'react-icons/fa';
import { MdPreview } from 'react-icons/md';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-orange-500 text-3xl text-center font-mono my-4'>Well come to Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay text-center"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'><CgProfile></CgProfile> <span className=' text-purple-600 font-serif text-1xl font-bold'>Profile</span></Link></li>

                    {
                        !admin ?
                            <>
                                <li><Link to='/dashboard/myReview'><MdPreview></MdPreview> <span className='text-purple-600 font-serif text-1xl font-bold'>My Review</span></Link></li>
                                <li><Link to='/dashboard/myOrders'><FaFirstOrderAlt></FaFirstOrderAlt> <span className='text-purple-600 font-serif text-1xl font-bold'>My Orders</span></Link></li>
                            </>
                            :

                            <>

                                <li><Link to='/dashboard/users'><RiAdminFill></RiAdminFill> <span className='text-purple-600 font-serif text-1xl font-bold'>All Users</span></Link></li>
                                <li><Link to='/dashboard/addProduct'><span className='text-purple-600 font-serif text-1xl font-bold'>Add Product</span></Link></li>
                                <li><Link to='/dashboard/manageItem'><span className='text-purple-600 font-serif text-1xl font-bold'>Manage Item</span></Link></li>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;