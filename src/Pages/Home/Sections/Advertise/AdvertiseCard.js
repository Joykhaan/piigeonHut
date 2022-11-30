import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ advertiseProduct }) => {
    const {picture,id} = advertiseProduct
    return (
        <div className="card  card-side bg-base-100 shadow-xl">
            <figure ><img className='h-72 ' src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">New mobile is coming!</h2>
                <p className='text-xl'>Click the button to Buy The moblie</p>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${id}`} className="btn btn-primary text-white font-bold">Buy this</Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;