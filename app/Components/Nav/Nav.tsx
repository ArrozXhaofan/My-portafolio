"use client"

import { RouteNav, getRoutesNav } from '@/models';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface SubNavConfiguration {
  title: string
  items: string[]
  //heigth: this.items.length * 80
}

interface Props {
  data?: SubNavConfiguration
}

export default function Navigatore({ data }: Props) {

  const routesNavs: RouteNav[] = getRoutesNav()

  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)

  const [isOnContact, getIsOnContact] = useState(false)
  const [isPhone, getIsPhone] = useState(false)
  const [isMail, getIsMail] = useState(false)

  const [height, setHeight] = useState('')

  useEffect(() => {
    if (data != null) {
      if (data.items.length == 1) {
        const index = '90';
        setHeight(index)
      } else {
        const index = `${data.items.length * 52}`;
        setHeight(index)
      }

    }
  }, [data])

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
    setSubOpen(false)
    getIsOnContact(false)
    getIsMail(false)
    getIsPhone(false)
  }
  function clickSubOpen() {
    setSubOpen(!subOpen)
    setOpen(false)
  }

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else {
      console.error(`No se encontró el elemento con id: ${id}`);
    }
    setSubOpen(!subOpen)
  }

  return (
    <div className='fixed top-0 w-screen z-40 select-none'>

      {/*SMALL SCREENS NAV*/}
      <nav className={`w-screen transition-all duration-500 ease-in-out delay-150 lg:hidden 
              ${open ? 'h-screen' : 'h-12'} backdrop-blur-md bg-neutral-800 bg-opacity-50 top-0 z-10 select-none relative
              overflow-hidden `} >

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
                 text-white text-3xl font-semibold flex flex-col select-none gap-1 z-70`}>
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

          <button onClick={() => clickContact()}
            className={` ${open ? 'opacity-100 delay-[300ms]' : 'opacity-0 delay-[0ms]'}
                   active:bg-neutral-700 active:text-neutral-400  
                    transition-all duration-[200ms] ease-in p-2 px-5 flex justify-start
                    ${isOnContact ? ' text-neutral-600' : ''}`}>
            Contacto
          </button>

          <div className={`flex flex-col px-14 gap-5 pt-2 
            ${open ? 'opacity-100 delay-[300ms]' : 'opacity-0 delay-[0ms]'}`}>
            <a href="https://www.linkedin.com/in/jeanpiere-laura-lobreguez-815318185/" target='_blank'
              className={` ${isOnContact ? 'opacity-100' : '-translate-x-56 opacity-0 w-min'} transition-all duration-700 delay-[100ms]`}>
              Linkendln
            </a>
            <a href={'https://wa.me/+393282045613'} target='_blank'
              className={` ${isOnContact ? 'opacity-100' : '-translate-x-56 opacity-0 w-min'} transition-all duration-700 delay-[150ms]`}>
              Whatsapp
            </a>
            <a href="mailto:jean.ganador12@gmail.com"
              className={` ${isOnContact ? 'opacity-100' : '-translate-x-56 opacity-0 w-min'} transition-all duration-700 delay-[200ms]`}>
              Correo
            </a>
            <a href='tel:+51946272030'
              className={` ${isOnContact ? 'opacity-100' : '-translate-x-56 opacity-0 w-min'} transition-all duration-700 delay-[250ms]`}>
              Telefono
            </a>

          </div>

        </div>

      </nav>

      {/*BIG SCREENS NAV*/}
      <nav className={`w-full h-7 backdrop-blur-lg bg-neutral-800 bg-opacity-50 hidden lg:flex
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

      {/** SUBNAV */}
      <nav style={{ height: subOpen ? `${height}px` : '40px' }}
        className={` ${data ? '' : 'hidden'}
                      w-screen backdrop-blur-md bg-white bg-opacity-60 flex flex-col justify-start  
                      items-center px-10 border-b-[0.5px] border-neutral-500 top-12 lg:top-7 absolute
                      transition-all duration-300 delay-[175ms]`}>

        <div className='w-full h-10 max-w-lg flex justify-between items-center absolute px-9'>
          <span className='font-medium'>{data?.title}</span>
          <span className='flex justify-center items-center'>

            <button onClick={() => clickSubOpen()} className='p-2'>
              <Image width={15} height={15} src={'/symbols/chevron.up.svg'} alt='chevron'
                className={`transition-all duration-700 ease-in-out ${subOpen ? '' : 'scale-y-[-1]'}`}
              />
            </button>

          </span>
        </div>

        <div className={`
        min-h-4 w-full max-w-lg flex flex-col font-hel-neue text-sm gap-3 mt-7 py-5 px-8 transition-all duration-1000
             ${subOpen ? '' : '-translate-y-[250px] -top-40 delay-150'}`}>

          {
            data?.items.map((item, index) => (
              <button onClick={() => scrollToElement(data.items[index])} key={index}
                className={`text-neutral-900 flex items-center gap-5 group opacity-0
                  ${subOpen ? 'duration-200  delay-[600ms] opacity-100' : 'opacity-0 duration-200 delay-[150ms]'}`}>
                <div className='h-4 w-[1px] rounded-full bg-neutral-700 opacity-0 group-hover:opacity-100 duration-500'></div>
                {item}
              </button>
            ))
          }
        </div>

      </nav>

    </div>




  )
}