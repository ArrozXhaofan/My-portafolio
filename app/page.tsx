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
    <div className="min-h-screen min-w-screem max-w-screen  bg-black flex flex-col items-center justify-center cover 
    overflow-hidden">

      <div className="max-w-4xl min-h-screen flex flex-col gap-5 justify-center items-center">
        <img data-aos-delay="1000" data-aos-duration="3000" data-aos="fade up" src="hello1.png" alt="Frase inial"
          className='object-contain w-[250px] h-[120px] pointer-events-none select-none' />
        <div className='flex flex-col gap-0 items-center'>
          <h1
            data-aos-delay="1500"
            data-aos-duration="3000"
            data-aos="fade up"
            className='text-4xl text-white font-sf-semibold text-shadow-glow'>
            Jeanpiere Laura
          </h1>
          <h1 data-aos-delay="1900"
            data-aos-duration="3000"
            data-aos="fade up"
            className='text-xl text-white font-sf-regular-rounded'>
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
            Con la finalidad de mejorar mis habilidades en el desarrollo de aplicaciones móviles, he realizado algunos
            proyectos personales.
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
            Con la finalidad de mejorar mis habilidades en el desarrollo de aplicaciones móviles, he realizado
            algunos proyectos personales.
          </p>
        </div>
        <div className=' py-14 flex justify-center'>
          <div className='select-none flex gap-1 hover:gap-2 hover:px-1 hover:duration-300 transition-all justify-center 
          items-center h-30 w-auto bg-neutral-800 rounded-[1rem] border-[0.5px] border-neutral-500 pr-[0.47rem]'>
            <img
              data-aos-duration="800"
              //data-aos="fade-up-right"
              src="xcode-logo.png" alt="primer proyecto"
              className='object-contain w-[4.7rem] h-[4.7rem] hover:scale-105 duration-150 active:opacity-35 ' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up" 
              src="ios18-logo.png" alt="primer proyecto"
              className='object-contain w-16 hover:scale-105 duration-150 active:opacity-35' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up-left" 
              src="swiftui-logo.png" alt="primer proyecto"
              className='object-contain w-20 hover:scale-105 duration-150 active:opacity-35' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up-left" 
              src="appstore-logo.png" alt="primer proyecto"
              className='object-contain w-[3.55rem] hover:scale-105 duration-150 active:opacity-35' />
          </div>
        </div>


        <div className='max-w-5xl flex flex-col justify-center items-center'>
          <h3 className='text-white text-shadow-glow font-sf-semiblack font-bold text-5xl'>
            Mis proyectos
          </h3>

          <div className='flex-wrap pt-20 justify-center gap-5 hidden md:flex lg:hidden '>
            <img data-aos="fade-up" data-aos-duration="500"
              src="p1.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500"
              src="p2.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500"
              src="p3.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500"
              src="p4.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500"
              src="p5.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
          </div>

          <div className='py-5 w-screen md:hidden'>
            <div className='flex gap-9 p-9 overflow-x-scroll'>
              <img src="p4.png" alt=""
              className='h-[600] bject-contain rounded-[1.5rem] border-[0.5px] border-neutral-600' />
              <img src="p3.png" alt=""
              className='h-[600] bject-contain rounded-[1.5rem] border-[0.5px] border-neutral-600' />
              <img src="p2.png" alt=""
              className='h-[600] bject-contain rounded-[1.5rem] border-[0.5px] border-neutral-600' />
              <img src="p5.png" alt=""
              className='h-[600] bject-contain rounded-[1.5rem] border-[0.5px] border-neutral-600' />
              <img src="p1.png" alt=""
              className='h-[600] bject-contain rounded-[1.5rem] border-[0.5px] border-neutral-600' />
            </div>

          </div>

          <div className='max-w-5xl w-3/4 justify-center items-center pt-20 hidden lg:flex'>
            <div className='relative h-[70vh] w-full border'>
              <img
                src="p4.png" alt="proyecto 1 reference"
                className='rounded-[1.5rem] border-[0.5px] border-neutral-600 w-[230px] object-contain
                left-0 absolute z-50 duration-500 transition-all 
                hover:drop-shadow-project hover:shadow-purple-600
                active:translate-x-[400px]' />
              <img
                src="p2.png" alt="proyecto 1 reference"
                className='rounded-[1.5rem] border-[0.5px] border-neutral-600 w-[230px] object-contain
                left-[40px] absolute z-40 duration-500 transition-all 
                hover:drop-shadow-project hover:shadow-purple-600
                active:translate-x-[360px]' />
              <img
                src="p3.png" alt="proyecto 1 reference"
                className='rounded-[1.5rem] border-[0.5px] border-neutral-600 w-[230px] object-contain
                left-[80px] absolute z-30 duration-500 transition-all 
                hover:drop-shadow-project hover:shadow-purple-600
                active:translate-x-[320px]' />
              <img
                src="p5.png" alt="proyecto 1 reference"
                className='rounded-[1.5rem] border-[0.5px] border-neutral-600 w-[230px] object-contain
                left-[120px] absolute z-20 duration-500 transition-all 
                hover:drop-shadow-project hover:shadow-purple-600
                active:translate-x-[280px]' />
              <img
                src="p1.png" alt="proyecto 1 reference"
                className='rounded-[1.5rem] border-[0.5px] border-neutral-600 w-[230px] object-contain
                left-[160px] absolute z-10 duration-500 transition-all 
                hover:drop-shadow-project hover:shadow-purple-600
                active:translate-x-[240px]' />
            </div>

          </div>

        </div>


      </div>




    </div>
  );
}
