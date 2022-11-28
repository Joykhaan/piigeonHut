import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ advertiseProduct }) => {
    const {picture,id} = advertiseProduct
    return (
        <div className="card  card-side bg-base-100 shadow-xl">
            <figure ><img className='h-96 ' src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${id}`} className="btn btn-primary">Buy this</Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;