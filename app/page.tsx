"use client"

import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Ajusta la duración si es necesario
    });
  }, []);

  return (
    <div className="min-h-screen min-w-screem max-w-screen  bg-black flex flex-col items-center justify-center">

      <div className="max-w-4xl min-h-screen flex flex-col gap-5 justify-center items-center">
        <img data-aos-delay="1000" data-aos-duration="3000" data-aos="fade up" src="hello1.png" alt="Frase inial"
          className='object-contain w-[250px] h-[120px] pointer-events-none select-none' />
        <div className='flex flex-col gap-0 items-center'>
          <h1 data-aos-delay="1500" data-aos-duration="3000" data-aos="fade up" className='text-4xl text-white font-sf-semibold'>
            Jeanpiere Laura
          </h1>
          <h1 data-aos-delay="1900" data-aos-duration="3000" data-aos="fade up" className='text-xl text-white font-sf-regular-rounded'>
            iOS Developer
          </h1>
        </div>
      </div>



      <div className='max-w-5xl p-5'>
        <div className=' text-white'>
          <h3 data-aos="fade-left" className='font-sf-semibold-rounded text-2xl md:text-4xl'>
            Proyectos
          </h3>
          <p data-aos="fade-bottom" className='text-sm text-gray-400 max-w-80 md:text-lg md:max-w-96'>
            Con la finalidad de mejorar mis habilidades en el desarrollo de aplicaciones móviles, he realizado algunos proyectos personales.
          </p>
        </div>
        <img src="mac-bg-1p.png" alt="primer proyecto" className=' ' />
      </div>



      <div className='max-w-5xl w-full p-5 md:pt-56 lg:pt-28'>
        <div className=' text-white flex flex-col items-center'>
          <h3 data-aos="fade-up" className='font-sf-semibold-rounded text-2xl md:text-5xl p-6'>
            Conocimientos
          </h3>
          <p data-aos="fade-up" className='text-sm text-gray-400 text-center max-w-80 md:text-lg md:max-w-96'>
            Con la finalidad de mejorar mis habilidades en el desarrollo de aplicaciones móviles, he realizado algunos proyectos personales.
          </p>
        </div>
        <div className=' py-14 flex justify-center'>
          <div className='select-none flex gap-1.5 justify-center items-center h-30 w-auto bg-gray-800 rounded-[1rem] border-[1px] border-gray-500 pr-[0.45rem]'>
            <img
              data-aos-duration="800"
              //data-aos="fade-up-right"
              src="xcode-logo.png" alt="primer proyecto"
              className='object-contain w-[4.7rem] h-[4.7rem]' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up" 
              src="ios18-logo.png" alt="primer proyecto"
              className='object-contain w-16' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up-left" 
              src="swiftui-logo.png" alt="primer proyecto"
              className='object-contain w-20' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up-left" 
              src="appstore-logo.png" alt="primer proyecto"
              className='object-contain w-[3.5rem]' />
          </div>
          
        </div>

      </div>




    </div>
  );
}
