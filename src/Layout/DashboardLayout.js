import React, { useContext } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/Authprovider/Authprovider';
import useAdmin from '../Hooks/IsAdmin/IsAdmin';
import useBuyer from '../Hooks/IsBuyer/IsBuyer';
import useSeller from '../Hooks/IsSeller/IsSeller';
import Navbar from '../Pages/Home/Sections/Navbar/Navbar';

const DashboardLayout = () => {

    const{user}= useContext(AuthContext);
    const [isBuyer]=useBuyer(user?.email);
    const [isAdmin]=useAdmin(user?.email);
    const [isSeller]=useSeller(user?.email);
    // const location = useLocation();
    // const navigate = useNavigate()
    // const from = location.state?.from?.pathname || '/';
    // navigate(from, { replace: true });
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {
                            isBuyer && <>
                            <li><Link className='text-4xl font-bold text-primary' to={`/dashboard/${user.uid}`} >My orders</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                            <li><Link className='text-4xl font-bold text-primary' to='/dashboard/addproduct'>Add a product</Link><Link className='text-4xl font-bold text-primary' to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        

                        {
                            isAdmin && <>
                            <li><Link className='text-4xl font-bold text-primary' to='/dashboard/allsellers'>All seller</Link></li>
                            <li><Link className='text-4xl font-bold text-primary' to='/dashboard/allbuyers'>All buyer</Link></li>
                            </>
                        }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;