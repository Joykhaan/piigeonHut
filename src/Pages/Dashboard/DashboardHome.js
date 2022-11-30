import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className="hero min-h-screen mt-16" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to Mobile Resell Dashboard</h1>
                    <p className="mb-5 text-white">Buy and Sell your old phone at best price ,It is more safe and More faster!!</p>
                    <Link to='/' className="btn btn-primary text-white">Products</Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;