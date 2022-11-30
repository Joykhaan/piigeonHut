import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.sellyt.com/blogs/wp-content/uploads/2019/02/Selyt-09-825x510.jpg")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Hello there</h1>
            <p className="mb-5 text-2xl text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/login' className="btn btn-primary text-white font-bold">Get Started</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;