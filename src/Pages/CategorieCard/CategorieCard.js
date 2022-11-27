import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategorieCards from './CategorieCards';
import PurchaseModal from './PurchaseModal/PurchaseModal';

const CategorieCard = () => {
    const cards = useLoaderData()
    const [productCard, setproductCard] = useState(null);
    return (
        <div className='mt-8 mb-16 grid gap-x-6 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {
                cards.map((card,index)=><CategorieCards
                key={index}
                card={card}
                setproductCard={setproductCard}
                ></CategorieCards>)
            }
            {
             productCard &&
            <PurchaseModal
            productCard={productCard}
            setproductCard={setproductCard}
            ></PurchaseModal>   
            }
            
        </div>
    );
};

export default CategorieCard;