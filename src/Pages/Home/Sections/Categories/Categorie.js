import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = ({categorie}) => {

    const {categorieName,id}=categorie
    return (
        <>

            <div>
                <div className="card w-full bg-base-100 shadow-2xl image-full hover:translate-y-6 ">
                    <figure><img  src="https://www.mpg.de/15505977/original-1602149955.webp?t=eyJ3aWR0aCI6ODQ4LCJmaWxlX2V4dGVuc2lvbiI6IndlYnAiLCJxdWFsaXR5Ijo4Niwib2JqX2lkIjoxNTUwNTk3N30%3D--e3217772a5742b4bbfac0b815722721ca1c36132" alt="Shoes" /></figure>
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