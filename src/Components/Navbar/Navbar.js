import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-blue-300 flex justify-between lg:px-20 py-5'>
            <div className='text-3xl font-bold'>
                <h1>Sifat Quiz Time</h1>
            </div>
            <div className='flex'>
                <Link className='mx-2 font-bold hover:underline' to="/">Home</Link>
                <Link className='mx-2 font-bold hover:underline' to="/stats">Stats</Link>
                <Link className='mx-2 font-bold hover:underline' to="/blog">Blog</Link>
            </div>

        </div>
    );
};

export default Navbar;