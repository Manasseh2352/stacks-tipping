'use client';
import React from 'react';

export default function Page() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center mt-10">
            <nav className=" flex justify-between gap-50 lg:gap-96">
                <div>
                    <h1>TIPJAR</h1>
                </div>

                <div className='hidden md:flex'>
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>How it works</li>
                        <li>Leaderboard</li>
                        <li className="bg-blue-600 p-1 rounded">Conect Wallet</li>
                    </ul>
                </div>
                <div>
                    <button
                        className="md:hidden p-2 rounded bg-blue-600"
                        onClick={toggleMenu}
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>

                    
                </div>
                
            </nav>
            {isOpen && (
                        <ul className="absolute w-full h-screen mt-10 bg-black place-items-center md:hidden">
                            <li className="py-2">Home</li>
                            <li className="py-2">How it works</li>
                            <li className="py-2">Leaderboard</li>
                            <li className="py-2 bg-blue-600 text-white rounded">Connect Wallet</li>
                        </ul>
                    )}
        </div>
    );
}