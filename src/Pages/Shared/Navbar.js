import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Home from '../Home/Home';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const menuItems = <>
        <li><Link to="/">Home</Link></li>

        {/* <li><Link to="/service/:serviceId">Purchase</Link></li> */}
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/my">My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }

        <li> {user ? <button class="btn btn-ghost my-auto" onClick={logout}>Sign Out</button> : <Link to="/login">
            Log In
        </Link>}</li>

        <li>
            <Link to='#'>
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar ml-2">
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/bPRW40d/imgbb.jpg" />
                    </div>
                </label>
            </Link>
        </li>

    </>
    return (
        <div className="navbar bg-slate-300 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' element={<Home></Home>}> <a className="btn btn-ghost normal-case text-2xl"><span className='text-orange-700 font-bold font-mono'>Dwell Manufacture</span></a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default Navbar;