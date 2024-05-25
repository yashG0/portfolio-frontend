import React, { useEffect, useState } from 'react'
import Header from './Header'
import { FiCheckCircle, FiChevronDown, FiChevronsDown } from 'react-icons/fi'
import Project from './Project';
import { FaFacebook, FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';

const Home = () => {

  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollToBottom = () => {
    setIsScrolling(true);
  };

  useEffect(() => {
    if (isScrolling) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
      setIsScrolling(false);
    }
  }, [isScrolling]);


  return (
    <>
      <Header />
      <div className="hero-background w-full min-h-screen relative">
        <div className="w-full h-screen bg-black/10 flex items-center justify-center">

          {/* MY NAME */}
          <div className="text-4xl font-sans md:text-6xl absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-tight text-left w-[80%] md:w-fit">
            Hello, I am  <span className='text-indigo-700 font-medium'>Yash Gaurkar</span>

            {/* My INFO */}
            <div className='text-lg font-sans md:text-2xl mt-4 space-y-3 leading-relaxed'>
              I am a Full Stack <span className='text-indigo-700'> Web Developer</span>
            </div>
            <div>

              {/* SOCIAL LINKS FOR MOBILE */}
              <ul className={`md:hidden flex border border-gray-500 rounded-xl mt-4 w-fit p-2 space-x-2`}>
                <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/yash-gaurkar-a897b3228/">
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100095157373972">
                    <FaFacebook size={30} />
                  </a>
                </li>
                <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://github.com/yashG0">
                    <FaGithub size={30} />
                  </a>
                </li>
                <li className='hover:text-indigo-400 duration-75 uppercase cursor-pointer text-4xl'>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.hackerrank.com/profile/yashgaurkar0">
                    <FaHackerrank size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div onClick={handleScrollToBottom} className='rounded-full animate-bounce absolute hover:bg-gray-300/40  cursor-pointer bottom-44'> <FiChevronsDown className='text-white/60' style={{ fontSize: '3.4rem' }} /> </div>
        </div>


      </div>

      <Project />

    </>
  )
}

export default Home