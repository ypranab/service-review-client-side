import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import logo from '../assests/logo.ico'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const menuItems = <>
        {
            user?.email ?
                <>
                    <li>
                        <button className='btn btn-outline btn-warning fonst-semibold'>
                            <Link to='/service'>Add Service</Link>
                        </button></li>
                    <li>
                        <button className='btn btn-outline btn-warning fonst-semibold'>
                            <Link to='/reviews'>My Reviews</Link>
                        </button></li>
                    <li><button className='btn btn-outline btn-warning' onClick={handleLogOut}>
                        <Link to='/'>Logout</Link>
                    </button></li>
                </>
                :
                <li className='fonst-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <ul className="ml-6">
                    <li className='fonst-semibold'><Link to='/'>
                        <button className='btn btn-primary'>Home</button>
                    </Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;