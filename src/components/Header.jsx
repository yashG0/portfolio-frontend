import { FaFacebook, FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/y_logo.png'
import resumePdf from '../assets/webdev_myresume-1.pdf';

const Header = () => {
   const [hamburger, setHamburger] = useState(false);

   const hamburgerToggle = () => {
      setHamburger(!hamburger);
   }

   return (
      <header className="bg-[#111111] text-white flex justify-center duration-300 relative z-20">
         <nav className="p-4 flex flex-row items-center w-[90%] md:w-[60%] justify-between">
            {/* MY LOGO */}
            <div className="logo">
               <img className='w-10 md:w-20 invert' src={logo} alt="logo" />
            </div>

            {/* MY LINKS */}
            <ul className={`${hamburger ? 'block bg-[#111111]/80' : 'hidden'} space-y-3 md:space-y-0 md:flex md:flex-row md:gap-5 absolute md:static top-[70px] -z-10 left-0 right-0 md:top-auto md:left-auto md:right-auto bg-[#111111] md:bg-transparent p-4 md:p-0 text-center md:z-20`}>
               
               <li className='uppercase cursor-pointer text-lg hover:text-gray-300'>
                  <NavLink to="/" activeclassname="active" onClick={hamburgerToggle}>Home</NavLink>
               </li>
               <li className='uppercase cursor-pointer text-lg hover:text-gray-300'>
                  <NavLink to="/about" onClick={hamburgerToggle}>About</NavLink>
               </li>
               <li className='uppercase cursor-pointer text-lg hover:text-gray-300'>
                  <NavLink to="/contact" onClick={hamburgerToggle}>Contact</NavLink>
               </li>
               <li className='uppercase cursor-pointer text-lg hover:text-gray-300'>
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer" onClick={hamburgerToggle}>My Resume</a>
               </li>
            </ul>

            {/* MY SOCIAL MEDIA HANDLER */}
            <ul className={`hidden md:flex md:gap-5 gap-2 justify-center absolute md:static top-[214px] left-0 right-0 bg-[#111111] md:bg-transparent p-4 md:p-0 text-center z-20`}>
               <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/yash-gaurkar-a897b3228/">
                     <FaLinkedin />
                  </a>
               </li>
               <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100095157373972">
                     <FaFacebook />
                  </a>
               </li>
               <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://github.com/yashG0">
                     <FaGithub />
                  </a>
               </li>
               <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.hackerrank.com/profile/yashgaurkar0">
                     <FaHackerrank />
                  </a>
               </li>
            </ul>

            <div className='md:hidden cursor-pointer z-30' onClick={hamburgerToggle}>
               {hamburger ? <FiX size={25} /> : <FiMenu size={25} />}
            </div>
         </nav>
      </header>
   );
};

export default Header;
