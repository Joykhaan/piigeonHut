import React from 'react';

const Blogs = ({blog}) => {
    const{question,ans}=blog
    return (
        <div className='bg-slate-200 mt-16 mb-16'>
            <div>
                <h1 className='text-3xl  mb-6 text-bold'>{question}</h1>
                <p>{ans}</p>
            </div>
        </div>
    );
};

export default Blogs;