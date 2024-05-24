import React from 'react'
import Header from './Header'

const About = () => {



  return (
    <>
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#7689d5a6,transparent)]"></div></div> */}
      <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#81b3e2] opacity-50 blur-[80px]"></div></div>

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
            I am a BCA graduate, name <span className='text-[#6886fd]'>Yash Gaurkar</span> a strong passion for web development. I specialize in creating
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