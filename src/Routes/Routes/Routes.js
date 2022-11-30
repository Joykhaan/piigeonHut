import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import NotFound from "../../Pages/404page/NotFound";
import Blog from "../../Pages/Blog/Blog";
import CategorieCard from "../../Pages/CategorieCard/CategorieCard";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/Allseller/AllSeller";
import DashboardHome from "../../Pages/Dashboard/DashboardHome";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";
import MyProducts from "../../Pages/Dashboard/MyProduct/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../PrivateRoute/AdminRoute/AdminRoute";
import BuyerRoute from "../PrivateRoute/BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import SellerRoute from "../PrivateRoute/SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/categories/:id',
                element:<PrivateRoute><CategorieCard></CategorieCard></PrivateRoute>,
                loader:({params}) => fetch(`https://mobile-reselling-server.vercel.app/categories/${params.id}`),
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,
        children:[
            {
                path:'/dashboard',
                element:<DashboardHome></DashboardHome>
            },
            {
                path:'/dashboard/:uid',
                element:<BuyerRoute><Myorders></Myorders></BuyerRoute>,
                loader:({params}) => fetch(`https://mobile-reselling-server.vercel.app/dashboard/${params.uid}`)
            },
            {
                path:'/dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/allsellers',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
        ]
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
])

export default router;