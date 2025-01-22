import { getRoutesNav, RouteNav } from '@/models'
import Image from 'next/image'
import React from 'react'

export default function Footer() {

  const routes: RouteNav[] = getRoutesNav()

  return (

    <div className='border w-full h-auto bg-neutral-200 flex justify-center py-7'>

      <div className='max-w-2xl  w-full'>
        {
          routes.map((route, index) => (
            <a href={route.path} key={index}
              className='flex justify-between items-center py-1 hover:bg-neutral-300 group px-10 duration-700 hover:opacity-50'>
              <span className='font-light text-neutral-600'>{route.title}</span>
              <Image width={7} height={7} src={'/symbols/chevron.right.svg'} alt='icon' />
            </a>
          ))
        }

      <p className='text-center py-10 font-hel-neue text-xs px-5'>
        Pagina hecha por Jeanpiere Laura Lobreguez - 2024 , gracias por ver mi portafolio.
      </p>

      </div>


    </div>
  )
}
