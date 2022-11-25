import React from 'react';
import Categorie from './Categorie';

const Categories = () => {
    return (
        <>
        <h1 className='mt-16 text-5xl text-center'>Product Categories</h1>
        <div className='mt-8 mb-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            <Categorie></Categorie>
        </div>
        </>
        
    );
};

export default Categories;