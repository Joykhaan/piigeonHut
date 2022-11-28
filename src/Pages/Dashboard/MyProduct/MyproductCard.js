import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MyproductCard = ({ myproduct }) => {
    const { picture, resalePrice, sellerName} = myproduct
    const sayHello=(advertiseProduct)=>{
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
                    
                }
                
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
         <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{sellerName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button onClick={() => sayHello(myproduct)} className="btn btn-primary">Advertise</button>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MyproductCard;