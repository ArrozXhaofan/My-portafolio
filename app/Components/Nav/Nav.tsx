"use client"

import { RouteNav, getRoutesNav } from '@/models';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigatore() {

  const routesNavs: RouteNav[] = getRoutesNav()

  const [open, setOpen] = useState(false);
  const [isOnContact, getIsOnContact] = useState(false)

  const [isPhone, getIsPhone] = useState(false)
  const [isMail, getIsMail] = useState(false)

  function clickToPhone() {
    getIsPhone(!isPhone)
    getIsMail(false)
  }

  function clickToMail() {
    getIsMail(!isMail)
    getIsPhone(false)
  }

  function clickContact() {
    getIsOnContact(!isOnContact)
    getIsMail(false)
    getIsPhone(false)
  }

  function clickIsOpen() {
    setOpen(!open)
    getIsOnContact(false)
    getIsMail(false)
    getIsPhone(false)
  }

  return (
    <div className='fixed top-0 w-screen z-30 select-none'>

      <nav className={`w-screen transition-all duration-500 ease-in-out delay-150 lg:hidden 
              ${open ? 'h-screen' : 'h-12'} backdrop-blur-md bg-neutral-800 bg-opacity-50 top-0 z-10 select-none relative `} >

        <div className='w-full h-12 flex justify-between px-5 items-center p-1  absolute z-20'>

          <a href='#' className='font-sf-regular-rounded p-5'>
            <div className={`flex gap-1.5 items-center transition-all duration-300  ease-in-out ${open ? 'opacity-0' : ''}`} >
              <Image width={15} height={15} src={'/symbols/apple.svg'} alt='apple logo' />
              <span className={`text-white opacity-85 text-lg`}>Jeanpiere</span>
            </div>
          </a>

          <button onClick={() => clickIsOpen()} className='flex gap-3 justify-center items-center p-4'>
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

          <button onClick={()=> clickContact()}
                className={` ${open ? 'opacity-100 delay-[300ms]' : 'opacity-0 delay-[0ms]'}
                   active:bg-neutral-700 active:text-neutral-400  
                    transition-all duration-[200ms] ease-in p-2 px-5 flex justify-start`}>
            Contacto
          </button>

          <div className={`flex flex-col px-14 gap-5 pt-2 text-gray-400 
            ${open ? 'opacity-100 delay-[300ms]' : 'opacity-0 delay-[0ms]'}`}>
              <a href="https://www.linkedin.com/in/jeanpiere-laura-lobreguez-815318185/" target='_blank' 
                className={` ${isOnContact?'opacity-100':'-translate-x-56 opacity-0'} transition-all duration-700 delay-[100ms]`}>
                Linkendln
              </a>
              <a href={'https://wa.me/+393282045613'} target='_blank'
                className={` ${isOnContact?'':'-translate-x-56'} transition-all duration-700 delay-[150ms]`}>
                Whatsapp
              </a>
              <a href="mailto:jean.ganador12@gmail.com"
                className={` ${isOnContact?'':'-translate-x-56'} transition-all duration-700 delay-[200ms]`}>
                Correo
              </a>
              <a href='tel:+51946272030'
                className={` ${isOnContact?'':'-translate-x-56'} transition-all duration-700 delay-[250ms]`}>
                Telefono
              </a>

          </div>

        </div>

      </nav>

      {
        //OTHER DIV
      }


      <nav className={`w-full h-7 backdrop-blur-md bg-neutral-800 bg-opacity-50 hidden lg:flex
               justify-center items-center top-0 absolute z-10 select-none`} >

        <div className={`text-white opacity-85 font-sf-thin text-xs max-w-2xl flex gap-6 items-center 
        transition-all duration-500 `}>

          <span className='p-1 select-none'>
            <Image width={10} height={10} src={'/symbols/apple.svg'} alt='apple logo' />
          </span>

          {
            routesNavs.map(route => (
              <a href={route.path} key={route.path}
                className={`hover:opacity-80 active:opacity-55 duration-150 p-1 ${isOnContact ? '-translate-y-7' : ''}`}>
                {route.title}
              </a>
            ))
          }

          <button onClick={() => clickContact()}
            className={` duration-150 p-1 ${isOnContact ? 'opacity-30' : 'hover:opacity-80 active:opacity-55'}`}>
            Contacto
          </button>

        </div>

        <div className={`absolute text-white opacity-85 font-sf-thin text-xs max-w-2xl flex gap-6 items-center 
        transition-all duration-200  ${isOnContact ? '' : '-translate-y-14'}  duration-500 transition-all`}>
          <a href={'https://www.linkedin.com/in/jeanpiere-laura-lobreguez-815318185/'} target='_blank'
            className={`  hover:opacity-80 active:opacity-55 duration-500 p-1`}>
            Linkedln
          </a>

          <a href={'https://wa.me/+393282045613'} target='_blank'
            className={`  hover:opacity-80 active:opacity-55 duration-500 p-1`}>
            Whatsapp
          </a>

          <div>
            {
              isPhone ?
                <a href='tel:+51946272030'
                  className={`  hover:opacity-80 active:opacity-55 duration-500 p-1 select-text`}>
                  +51 946 272 030
                </a>
                :
                <button onClick={() => clickToPhone()}
                  className={`  hover:opacity-80 active:opacity-55 duration-500 p-1`}>
                  Telefono
                </button>
            }
          </div>

          <div>
            {
              isMail ?
                <a href='tel:+51946272030'
                  className={`  hover:opacity-80 active:opacity-55 duration-500 p-1 select-text`}>
                  jean.ganador12@gmail.com
                </a>
                :
                <button onClick={() => clickToMail()}
                  className={`  hover:opacity-80 active:opacity-55 duration-500 p-1`}>
                  Correo
                </button>
            }
          </div>

        </div>





      </nav>
    </div>

  )
}