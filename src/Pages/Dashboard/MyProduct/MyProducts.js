import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';
import MyproductCard from './MyproductCard';

const MyProducts = () => {
    const{user}=useContext(AuthContext)
    const {data:myproducts=[]}=useQuery({
        queryKey:['myproducts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/myproducts/${user.uid}`);
            const data =await res.json();
            return data
        }
    })
    return (
        <div>
            <h1>My product</h1>
            <div className='mt-8 mb-16 grid gap-x-6 gap-y-20 grid-cols-1 md:grid-cols-2  justify-items-center'>
            
            {myproducts.length===0 && <h2>No product added yet</h2> }

            {
                myproducts.map(myproduct=><MyproductCard
                key={myproduct._id}
                myproduct={myproduct}
                ></MyproductCard>)
            }
        </div>
        </div>
        
    );
};

export default MyProducts;