import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';
import useSeller from '../../../Hooks/IsSeller/IsSeller';



const SellerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const[isSeller,issellerLoading]=useSeller(user?.email)
    const location =useLocation();
    if(loading || issellerLoading){
        return <div className="flex justify-center items-center my-8">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    }
    if(!isSeller){
        return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default SellerRoute;