import React from 'react';

const Blogs = ({blog}) => {
    const{question,ans}=blog
    return (
        <div className='bg-slate-200 mt-16 mb-16 mx-4'>
            <div className='p-6'>
                <h1 className='text-3xl  mb-6 text-bold text-primary'>{question}</h1>
                <p>{ans}</p>
            </div>
        </div>
    );
};

export default Blogs;