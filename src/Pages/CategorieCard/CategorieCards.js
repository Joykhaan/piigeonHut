import React from 'react';

const CategorieCards = ({ card, setproductCard  }) => {
    const { id, Brand, picture, ProductName, Location, resalePrice, originalPrice, useYears, postedTime, sellerName} = card
    const time = new Date().toLocaleTimeString();
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Brand}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    {/* The button to open modal */}
                    <label onClick={()=>setproductCard(card)} htmlFor="my-modal-3" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CategorieCards;