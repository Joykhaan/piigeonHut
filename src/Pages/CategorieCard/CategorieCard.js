import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategorieCard = () => {
    const card = useLoaderData()
    console.log('card',card)
    return (
        <div>
            
        </div>
    );
};

export default CategorieCard;