import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';
import useAdmin from '../../../Hooks/IsAdmin/IsAdmin';



const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const[isAdmin,isAdminLoading]=useAdmin(user?.email)
    const location =useLocation();
    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center my-8">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    }
    if(!isAdmin){
        return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default AdminRoute;