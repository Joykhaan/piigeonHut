import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../ContextApi/Authprovider/Authprovider';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems=  <>
    <li><Link to='/' className='text-2xl  font-bold'> Home</Link></li>
    <li><Link to='/blog' className='text-2xl  font-bold'> Blog</Link></li>
    
    <li><Link to='/login' className='text-2xl  font-bold'>Login</Link></li>
    {user?.email?<li>  <Link onClick={handleLogOut} className='text-2xl  font-bold'>Logout</Link> </li>:<li>  <Link className='hidden'>Logout</Link> </li>}
    {user?.email?<li>  <Link to={`/dashboard`} className='text-2xl  font-bold'>Dashboard</Link> </li>:<li>  <Link className='hidden'>Dashboard</Link> </li>}
    </>
    
    return (
        <div className="navbar my-4 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-primary font-bold md:text-4xl text-2xl mr-16 md:mr-0">Pigeon Haat</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
              {menuItems}
          </ul>
        </div>
        {/* dashboard drawer */}
        <label htmlFor='dashboard-drawer' tabIndex={3} className="btn btn-ghost lg:hidden navbar-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div> 
    );
};

export default Navbar;