import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';


const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
  

    const uid = user?.uid;
    console.log('id', uid)
    const { data: myproducts = [],refetch} = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`https://pigeon-haat-server.vercel.app/myproducts/${uid}`);
            const data = await res.json();
            console.log('data', data)
            return data

        }
    })

    

   
    

    const handleAdvertise=(advertiseProduct)=>{
        fetch('https://pigeon-haat-server.vercel.app/advertised', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertiseProduct)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.acknowledged){
                    toast.success("Advertise Successful!");
                    
                }else{toast.error("Advertise Successful!")}
               
                refetch()
            
                
            })
            .catch(error => console.error(error));
    }
    const handleaddDelete=(id) =>{
        console.log('ididi',id)
        const proced  =window.confirm('are you sure?? to delete the product');
        if(proced){
            fetch(`https://pigeon-haat-server.vercel.app/deleteadd/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                   
    
                    toast.success("Deleted Successfully");
                    refetch()
    
                }
    
            })
        }
        }
    // setdata(sayHello)
    if (loading) {
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-16 mb-8'>My products</h1>
            <div className='mt-8 mb-16 grid gap-x-6 gap-y-20 grid-cols-1 md:grid-cols-2  justify-items-center'>

                {myproducts.length === 0 && <h2>No product added yet</h2>}
                {
                    myproducts.map(myproduct => <div className="card w-96 bg-base-100 mx-4 shadow-xl"
                    key={myproduct._id}
                    >
                    <figure className="px-10 pt-10">
                        <img src={myproduct.picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name:{myproduct.sellerName}</h2>
                        <h2 className="card-title">${myproduct.resalePrice}</h2>
                        <p>{myproduct.description}</p>
                        <div className="card-actions">
                            <button onClick={() => handleAdvertise(myproduct)}  className="btn btn-primary text-white">Advertise</button>
                            <button onClick={() => handleaddDelete(myproduct._id)} className="btn btn-primary text-white">Delete</button>
                        </div>
                    </div>
                </div>)
                }

                <Toaster></Toaster>
            </div>
        </div>

    );
};

export default MyProducts;