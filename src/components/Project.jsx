import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import bg1 from '../assets/bg1.jpg'
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Project = () => {
  const [projectdata, setProjectData] = useState(null);
  
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  useEffect(() => {

    fetch('https://yash2004.pythonanywhere.com/getprojectdata/')
      .then(response => response.json())
      .then(data => setProjectData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(projectdata);


  return (
    <div>
      <div className='h-screen text-center font-opensans text-4xl mt-3 text-indigo-700 font-medium'>My Projects</div>
      <div className='grid p-8 grid-cols-1 gap-5 w-full md:grid-cols-3 place-items-center my-3'>
        {projectdata ? (
          projectdata.map(project => (
            <>
              <div key={project.project_name} className="hidden md:block max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
                <div>
                  <img className="rounded-t-lg" src={project.project_img_url} alt="project image" />
                </div>

                <div className="p-5">
                  <div>
                    <h5 className="cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.project_name}</h5>
                  </div>
                  <p className="cursor-pointer mb-3 font-normal text-gray-700 dark:text-gray-400 h-[139px] overflow-y-hidden">{project.project_description}</p>
                  <a href={project.project_source_code} target='_blank' className="inline-flex items-center font-medium text-center text-white ">
                    <Button>
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>

            </>
          ))
        ) : (
          <div>No projects</div>
        )}

        {/* Mobile view */}
        <div className='md:hidden block'>
          <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
            <CarouselContent>
              {projectdata && projectdata.map(project => (
                <CarouselItem key={project.project_name}>
                  <div className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
                    <div>
                      <img className="rounded-t-lg" src={project.project_img_url} alt="project image" />
                    </div>
                    <div className="p-5">
                      <div>
                        <h5 className="cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.project_name}</h5>
                      </div>
                      <p className="cursor-pointer mb-3 font-normal text-gray-700 dark:text-gray-400 h-[139px] overflow-y-hidden">{project.project_description}</p>
                      <a href={project.project_source_code} target='_blank' className="inline-flex items-center font-medium text-center text-white ">
                        <Button>
                          Read more
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </div>


      </div>
    </div>
  );
};

export default Project;
