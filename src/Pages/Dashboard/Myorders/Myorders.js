import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Myorders = () => {
    const myOrders = useLoaderData()
    return (
        <div>

            <div className="overflow-x-auto mt-16">
                <table className="table w-full">

            
                    {myOrders.length>0?<thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>:<h1>You Have no order  to show</h1>}
                    <tbody>
                        {
                            myOrders.map(myOrder => <tr>
                                <td><img className="mask mask-circle w-20 h-20" src={myOrder.img} alt='' /></td>
                                <td>{myOrder.name}</td>
                                <td>{myOrder.email}</td>
                                <td>{myOrder.itemName}</td>
                                <td>{myOrder.price}</td>
                                <td>{myOrder.number}</td>
                                <td>{myOrder.location}</td>
                                <td><button className="btn btn-primary">pay</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Myorders;