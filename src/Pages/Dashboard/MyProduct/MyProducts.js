import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';
import MyproductCard from './MyproductCard';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    // const [myvariable, setmyvariable] = useState('save reload');
    // setTimeout(()=>{
    //     setmyvariable('dont reload')
    // },5000)

    const uid = user?.uid;
    console.log('id', uid)
    const { data: myproducts = [],refetch} = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts/${uid}`);
            const data = await res.json();
            console.log('data', data)
            return data

        }
    })

    

    // const [myproducts, setmyproducts] = useState([]);
    const [advertise, setAdvertise] = useState(false);
    // useEffect(() => {

    //         fetch(`http://localhost:5000/myproducts/${uid}`)
    //         .then(res=>res.json())
    //         .then(data=>{
    //             setmyproducts(data)
    //         })

    // }, [uid])
    // setmyproducts([3])

    const handleAdvertise=(advertiseProduct)=>{
        fetch('http://localhost:5000/advertised', {
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
                console.log('dataa',data)
                // if(data.modifiedCount>0){
                //     // refetch()
                //     toast.success("Advertise Successful!")
                // }
                refetch()
                setAdvertise(true)
                
            })
            .catch(error => console.error(error));
    }
    const handleaddDelete=(id) =>{
        console.log('ididi',id)
        const proced  =window.confirm('are you sure?? to delete the product');
        if(proced){
            fetch(`http://localhost:5000/deleteadd/${id}`,{
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
            <h1>My product</h1>
            <div className='mt-8 mb-16 grid gap-x-6 gap-y-20 grid-cols-1 md:grid-cols-2  justify-items-center'>

                {myproducts.length === 0 && <h2>No product added yet</h2>}
                {
                    myproducts.map(myproduct => <div className="card w-96 bg-base-100 shadow-xl"
                    key={myproduct._id}
                    >
                    <figure className="px-10 pt-10">
                        <img src={myproduct.picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{myproduct.sellerName}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button onClick={() => handleAdvertise(myproduct)}  className="btn btn-primary">Advertise</button>
                            <button onClick={() => handleaddDelete(myproduct._id)} className="btn btn-primary">Delete</button>
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