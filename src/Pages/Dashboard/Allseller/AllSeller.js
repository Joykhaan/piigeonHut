import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';

const AllSeller = () => {
    const {user}=useContext(AuthContext)
    // const [verify, setverify] = useState(false);
    // const [delet, setdelet] = useState(false);

    // console.log('ver',verify)
    const {data:allsellers=[],refetch}=useQuery({
        queryKey:['allsellers'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/allsellers`);
            const data =await res.json();
            return data
        }
    })
    const handleSellerDelete=(id) =>{
  
        const proced  =window.confirm('are you sure?? to delete the Seller');
        if(proced){
            fetch(`http://localhost:5000/deleteSeller/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount > 0){
                   
    
                    toast.success("Deleted Successfully");
                    refetch()
    
                }
    
            })
        }
        }
    const handleverifySeller=(email) =>{
  
        const proced  =window.confirm('are you sure?? to delete the Seller');
        if(proced){
            fetch(`http://localhost:5000/verify/${email}`,{
                method:'PUT'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.upsertedCount>0){
                   
    
                    toast.success("Verify Successfully");
                    // setverify(true)   
                    // if(data.modifiedCount>0){
                     
                    // }
                    
    
                }
                else{
                    toast.error("Already verified"); 
                }
    
            })
        }
        }
    return (
        <div>
            <h1>all seller</h1>
            <h1>{allsellers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Verify seller</th>
                        </tr>
                    </thead>
                    {
                        allsellers.map(allseller => <tbody
                        key={allseller._id}
                        >
                            <tr>
                                <td>{allseller.name}</td>
                                <td>{allseller.email}</td>
                                <td>{allseller.role}</td>
                                <td><button onClick={()=>handleSellerDelete(allseller._id)} className="btn btn-primary">Delete</button></td>
                                <td> {allseller?.isverified !== 'verified'&&<button onClick={()=>handleverifySeller(allseller.email)} className="btn btn-primary" >Verify</button>} </td>
                            </tr>
                        </tbody>)
                    }

                </table>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AllSeller;