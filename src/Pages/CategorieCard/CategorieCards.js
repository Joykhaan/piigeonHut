import React from 'react';
import { FaCheck } from "react-icons/fa";

const CategorieCards = ({ card, setproductCard  }) => {
    const {  Species, picture, ProductName, Location, resalePrice, originalPrice, useYears, postedTime, sellerName,isverified,purchaseYear,description,date,productcondition,number} = card
   
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ProductName}</h2>
                <h2 className="card-title">{sellerName}{isverified&& <FaCheck className='text-blue-900'></FaCheck>}</h2>
                <h2 className="card-title">{ProductName}</h2>
                <h2 className="card-title">Species: {Species}</h2>
                <h2 className="card-title">year: {purchaseYear}</h2>
                <h2 className="card-title">year: {useYears}</h2>
                <h2 className="card-title">Condition: {productcondition}</h2>
                <h2 className="card-title">Postdate: {date}</h2>
                <h2 className="card-title">Posttime: {postedTime}</h2>
                <h2 className="card-title">Purchase price: {originalPrice}</h2>
                <h2 className="card-title">Resell price: {
resalePrice}</h2>
                <h2 className="card-title">Phone: {number}</h2>
                <h2 className="card-title">location: {Location}</h2>
                <p className='text-xl'>{description}</p>
                <div className="card-actions justify-end">
                    {/* The button to open modal */}
                    <label onClick={()=>setproductCard(card)} htmlFor="my-modal-3" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CategorieCards;