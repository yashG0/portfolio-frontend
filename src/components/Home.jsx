import React, { useEffect, useState } from 'react'
import Header from './Header'
import { FiCheckCircle, FiChevronDown, FiChevronsDown } from 'react-icons/fi'
import Project from './Project';

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
            <div className='text-lg font-sans md:text-xl mt-4 space-y-3 leading-relaxed'>
              I am a Full Stack <span className='text-lg text-indigo-700'> Web Developer</span>
            </div>
          </div>

          <div onClick={handleScrollToBottom} className='rounded-full animate-bounce absolute hover:bg-gray-300/40  cursor-pointer bottom-44'> <FiChevronsDown className='text-white/60' style={{fontSize:'3.4rem'}} /> </div>
        </div>


      </div>

      <Project />

    </>
  )
}

export default Home