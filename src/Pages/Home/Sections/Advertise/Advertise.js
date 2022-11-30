import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const {data:advertiseProducts=[]}=useQuery({
        queryKey:['advertised'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/advertisedProducts`);
            const data =await res.json();
            return data
        }
    })
    return (
        <div>
            {advertiseProducts?.length >0 && <h1 className='text-5xl mt-16 mb-8'>Advertised Products</h1>}
            <div className='mt-8 mb-16 grid gap-x-6 gap-y-20 grid-cols-1 md:grid-cols-2  justify-items-center'>
              {
                advertiseProducts.map(advertiseProduct=><AdvertiseCard
                key={advertiseProduct._id}
                advertiseProduct={advertiseProduct}
                ></AdvertiseCard>)
            }  
            </div>
            
        </div>
    );
};

export default Advertise;