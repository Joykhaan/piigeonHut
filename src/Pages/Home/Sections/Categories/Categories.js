import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Categorie from './Categorie';

const Categories = () => {
    const [categories, setCategories]=useState([]);
    // const {loading}= useContext(AuthContext)
    // const categoryCard=useLoaderData()
    // console.log(categoryCard)
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <>
        <h1 className='mt-16 text-5xl text-center'>Product Categories</h1>
        <div className='mt-8 mb-16 grid gap-x-6 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {/* <Categorie></Categorie> */}
            {categories.map((categorie)=><Categorie
            key={categorie.id}
            categorie={categorie}
            ></Categorie>)}
        </div>
        </>
        
    );
};

export default Categories;