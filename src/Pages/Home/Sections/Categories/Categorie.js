import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = ({categorie}) => {

    const {categorieName,id}=categorie
    return (
        <>

            <div>
                <div className="card w-full bg-base-100 shadow-2xl image-full hover:translate-y-6 ">
                    <figure><img  src="https://www.globalbrandsmagazine.com/wp-content/uploads/2020/08/Top-10-Mobile-Brands-in-World-1-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body flex justify-center">
                        <h2 className="card-title text-white text-3xl md:text-5xl  justify-center">{categorieName}</h2>
                        
                        <div className="card-actions justify-center">
                            <Link to={`/categories/${id}`} className="btn btn-primary font-bold text-white">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            

        </>

    );
};

export default Categorie;