import React from 'react'
import Header from './Header'

const About = () => {



  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#81b3e2] opacity-50 blur-[80px]"></div></div>

      <div className='max-h-screen'>

        <Header />

        <div className='flex absolute top-[20%] md:top-[40%] md:justify-around flex-col md:flex-row  md:items-center p-12'>
          {/* LEFT SIDE */}
          <div className='text-black font-medium md:my-0 uppercase text-3xl md:text-7xl md:w-fit md:border-b-2 border-black'>
            About me
          </div>

          <div className='md:hidden block w-full h-[0.8px] my-5 bg-[#7689d5]'></div>

          {/* LEFT SIDE */}
          <div className='md:w-1/2 leading-relaxed md:leading-loose md:text-xl'>
            I am a BCA graduate, name <span className='text-indigo-700'>Yash Gaurkar</span> a strong passion for web development. I specialize in creating
            user-friendly and visually appealing websites. My excellent communication skills allow me
            to explain technical concepts to non-technical people effectively. I am committed to
            delivering high-quality work and constantly improving my skills in the dynamic field of web
            development.
          </div>
        </div>
      </div>
    </>
  )
}

export default About