import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    }

    return (
        <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-3xl font-texastangbold'>Cole Thorpen's Portfolio</h1> 
            <ul className='flex items-center'>
              {/* <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li> */}
              <li>
                <a className='bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
        </nav>
    // <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>Navbar</div>
  )
}
