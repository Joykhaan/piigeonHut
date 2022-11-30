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
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {
                            isBuyer && <>
                            <li><Link to={`/dashboard/${user.uid}`} >My orders</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                            <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
                            </>
                        }
                        

                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/allsellers'>All seller</Link></li>
                            <li><Link to='/dashboard/allbuyers'>All buyer</Link></li>
                            </>
                        }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;