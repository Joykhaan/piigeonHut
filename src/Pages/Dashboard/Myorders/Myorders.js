import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Myorders = () => {
    const myOrders = useLoaderData()
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(myOrder => <tr>
                                <td>{myOrder.name}</td>
                                <td>{myOrder.email}</td>
                                <td>{myOrder.itemName}</td>
                                <td>{myOrder.price}</td>
                                <td>{myOrder.number}</td>
                                <td>{myOrder.location}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Myorders;