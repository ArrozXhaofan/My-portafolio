"use client"

import { RouteNav, getRoutesNav } from '@/models';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigatore() {

  const routesNavs: RouteNav[] = getRoutesNav()

  const [open, setOpen] = useState(false);


  return (
    <div className='fixed top-0 w-screen z-30'>
      <nav className={`w-screen transition-all duration-500 ease-in-out delay-150 lg:hidden 
              ${open ? 'h-screen' : 'h-12'} backdrop-blur-md bg-neutral-800 bg-opacity-50 top-0 z-10 select-none relative `} >

        <div className='w-full h-12 flex justify-between px-5 items-center p-1  absolute z-20'>

          <a href='#' className='font-sf-regular-rounded p-5'>
            <div className={`flex gap-1 items-center transition-all duration-300  ease-in-out ${open ? 'opacity-0' : ''}`} >
              <Image width={20} height={20} src={'/symbols/apple.svg'} alt='apple logo' />
              <span className={`text-white opacity-85 text-lg`}>Jeanpiere</span>
            </div>
          </a>

          <button onClick={() => setOpen(!open)} className='flex gap-3 justify-center items-center p-4'>
            <div className="space-y-[7px]">
              <span className={`transform duration-300 block w-[20px] h-[2px] bg-white opacity-85 rounded-full 
                        ${open ? 'rotate-45 translate-y-[6px]' : ''} `} ></span>
              <span className={`transform duration-300 block w-[20px] h-[2px] bg-white opacity-85 rounded-full
                         ${open ? '-rotate-45 -translate-y-[2.5px]' : ''} `} ></span>
            </div>
          </button>

        </div>


        <div className={` duration-500 ${open ? 'delay-0' : 'delay-500  -translate-y-full'}
        absolute top-12 w-full h-screen
                 text-white text-3xl font-semibold flex flex-col select-none  z-70`}>
          {
            routesNavs.map(route => (
              <a href={route.path} key={route.path}
                className={` ${open ? 'opacity-100 delay-[300ms]' : 'opacity-0 delay-[0ms]'}
                   active:bg-neutral-700 active:text-neutral-400  
                            transition-all duration-[200ms] ease-in p-2 px-5`}>
                {route.title}
              </a>
            ))
          }
        </div>

      </nav>

      {
        //OTHER DIV
      }


      <nav className={`w-full h-7 backdrop-blur-md bg-neutral-800 bg-opacity-50 hidden lg:flex
               flex-col justify-center items-center top-0 absolute z-10 select-none`} >

        <div className='text-white opacity-85 font-sf-thin text-xs max-w-2xl flex gap-6 items-center'>

          <span className='p-1 select-none'>
            <Image width={12} height={12} src={'/symbols/apple.svg'} alt='apple logo' />
          </span>

          {
            routesNavs.map(route => (
              <a href={route.path} key={route.path} className={`hover:opacity-80 active:opacity-55 duration-150 p-1`}>
                {route.title}
              </a>
            ))
          }
        </div>



      </nav>
    </div>

  )
}