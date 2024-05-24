import React from 'react'
import img2 from '../assets/bg2.jpg'
import img1 from '../assets/bg1.jpg'
import { Button } from './ui/button'

const Project = () => {
  return (
    <>
      <div>

        <div className='text-center text-4xl mt-3 '>My Projects</div>

        {/* MY PROJECTS -> */}
        <div className='grid  p-8  grid-cols-1 gap-5 w-full md:grid-cols-3 place-items-center my-3'>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
            <a href="#">
              <img class="rounded-t-lg" src={img1} alt="project image" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" class="inline-flex items-center font-medium text-center text-white ">
                <Button>
                  Read more

                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>



        </div>
      </div>


    </>
  )
}

export default Project