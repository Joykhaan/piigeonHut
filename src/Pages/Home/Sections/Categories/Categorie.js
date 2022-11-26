import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = ({categorie}) => {

    const {categorieName,id}=categorie
    return (
        <>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full hover:translate-y-6">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{categorieName}</h2>
                        
                        <div className="card-actions justify-end">
                            <Link to={`/categorie/${id}`} className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            

        </>

    );
};

export default Categorie;