'use client';
import React from 'react';

export default function Page() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center mt-10">
            <nav className=" flex justify-between gap-70">
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
        </div>
    );
}