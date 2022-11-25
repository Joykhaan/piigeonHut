import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategorieCard = () => {
    const cardDetails = useLoaderData()
    console.log('card',cardDetails)
    return (
        <div>
            
        </div>
    );
};

export default CategorieCard;