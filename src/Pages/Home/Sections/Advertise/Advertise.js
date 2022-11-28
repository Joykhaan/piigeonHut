import { useQuery } from '@tanstack/react-query';
import React from 'react';

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
            <h1>{advertiseProducts.length}</h1>
        </div>
    );
};

export default Advertise;