'use client';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import picture from '../picture/panaverse (1).webp'
import Link from 'next/link';
export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleMenu = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            <div className='w-full mx-auto fixed  z-10 '>
                <nav className="flex justify-between items-center mt-0 px-4 shadow-md bg-white p-3">
                    <div className=' text-white '>
                        <Image src = {picture} alt=''  width={80} height={50} className=' text-white'/>
                    </div>
                    <div className='hidden md:flex space-x-8 bg-white justify-center'>
                        <a href='/' className='hover:underline scale-100 duration-200 hover:text-blue-600 cursor-pointer text-xl mt-5 text-center after:hover:bg-yellow-500 text-black '>Home</a>
                        <a href='/About' className='hover:text-blue-600 cursor-pointer text-xl hover:underline scale-100 duration-100 mt-5  text-black  underline-mt-1'>About</a>
                        <a href='/Blog' className='hover:text-blue-600 cursor-pointer text-xl hover:underline scale-100 duration-150 mt-5 text-wblack'>Blog</a>
                        <a href='/Comunity' className='hover:text-blue-600 cursor-pointer text-xl hover:underline scale-100 duration-150 mt-5 text-black'>Comunity</a>
                    </div>


                  <button  className=' hidden md:block bg-blue-500 rounded-md py-2 px-4 mt-2 hover:bg-red-600 hover:text-white transform-transition duration-300 '><a href="https://www.piaic.org/">Apply Now</a></button>
                    <button 
                        className='md:hidden p-2'
                        onClick={toggleMenu}
                        >
                        {sidebar ? <HiX size={24}  /> : <HiMenu size={24}  className='mt-6 text-black'/>}
                    </button>
                </nav>

            {/* Sidebar */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-75 z-50   transform ${sidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
                >
                {/* Close Button */}
                <div className='flex justify-end p-4'>
                    <button onClick={toggleMenu}>
                        <HiX size={24} className='text-black mt-4' />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className='flex flex-col items-center mt-10'>
                    <a href="#alishanhome" className='text-xl text-white py-2 hover:text-yellow-300' onClick={toggleMenu}>Home</a>
                    <a href="#alishanabout" className='text-xl text-white py-2 hover:text-yellow-300' onClick={toggleMenu}>About</a>
                    <a href="#services" className='text-xl text-white py-2 hover:text-yellow-300' onClick={toggleMenu}>Blog</a>
                    <a href="#projects" className='text-xl text-white py-2 hover:text-yellow-300' onClick={toggleMenu}>Comunity</a>
                  
                </div>
            </div>
            </div>
        </>
    );
}

