import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllBuyer = () => {
    const { data: allbuyers = [],refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allbuyers`);
            const data = await res.json();
            return data
        }
    })

    const handleBuyerDelete=(id) =>{
  
        const proced  =window.confirm('are you sure?? to delete the Buyer');
        if(proced){
            fetch(`http://localhost:5000/deleteBuyer/${id}`,{
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
    return (
        <div>
            <h1>All buyers</h1>
            <h1>{allbuyers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                          
                        </tr>
                    </thead>
                    {
                        allbuyers.map(allbuyer => <tbody
                        key={allbuyer._id}
                        >
                            <tr>
                                <td>{allbuyer.name}</td>
                                <td>{allbuyer.email}</td>
                                <td>{allbuyer.role}</td>
                                <td><button onClick={()=>handleBuyerDelete(allbuyer._id)} className="btn btn-primary">Delete</button></td>
                            </tr>
                        </tbody>)
                    }

                </table>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AllBuyer;