"use client"

import React, { useState } from 'react'
import Image from 'next/image'

export default function About() {

    const [isIntro, getIsIntro] = useState(true)
    const [isContacto, getContacto] = useState(false)
    const [isLocation, getLocation] = useState(false)
    const [isIdiomas, getIdiomas] = useState(false)
    const [isEstudios, getEstudios] = useState(false)

    function clickIntro() {
        getIsIntro(true)
        getContacto(false)
        getLocation(false)
        getIdiomas(false)
        getEstudios(false)
    }
    function clickContacto() {
        getIsIntro(false)
        getContacto(true)
        getLocation(false)
        getIdiomas(false)
        getEstudios(false)
    }
    function clickLocation() {
        getIsIntro(false)
        getContacto(false)
        getLocation(true)
        getIdiomas(false)
        getEstudios(false)
    }
    function clickIdiomas() {
        getIsIntro(false)
        getContacto(false)
        getLocation(false)
        getIdiomas(true)
        getEstudios(false)
    }
    function clickEstudios() {
        getIsIntro(false)
        getContacto(false)
        getLocation(false)
        getIdiomas(false)
        getEstudios(true)
    }

    return (

        <div className="w-full h-screen bg-[url('/me-bg.jpg')] bg-cover bg-center text-white flex pt-7 justify-center items-center">

            <div className='backdrop-blur-md h-full w-full rounded-[2.3rem] overflow-hidden flex justify-center items-center flex-col
            lg:h-[550px] lg:w-[750px]  lg:border-[0.5px] lg:border-gray-600 lg:flex-row lg:justify-start'>
                


                <div className='hidden lg:flex border-b-[0.5px] lg:border-r-[0.5px] border-gray-600 h-full  lg:flex-col p-4 select-none border w-full
                     lg:w-auto overflow-x-scroll md:overflow-auto'>
                    <div className='flex flex-col items-center pb-7 gap-2
                        md:flex-row'>
                        <Image width={70} height={70} src={'/symbols/person.crop.circle.svg'} alt='my icon'
                            className='w-8 '
                        />

                        <div className='flex flex-col items-center justify-center md:items-start'>
                            <h1 className='font-sf-semibold'>Jeanpiere Laura</h1>
                            <span className='font-sf-regular-rounded text-xs text-neutral-400'>iOS Developer</span>
                        </div>
                    </div>

                    <div className='flex lg:flex-col gap-1'>
                        <button onClick={() => clickIntro()}
                            className={`flex w-full gap-2  items-center p-1 rounded-lg ${isIntro ? 'bg-accent' : 'hover:bg-neutral-500'}`}>
                            <Image width={22} height={22} src={'/symbols/square.text.square.fill.svg'} alt='icon' />
                            <span className='text-[0.8rem] font-sf-regular'>Introduccion</span>
                        </button>
                        <button onClick={() => clickContacto()}
                            className={`flex w-full gap-2  items-center p-1 rounded-lg ${isContacto ? 'bg-accent' : 'hover:bg-neutral-500'}`}>                                <Image width={22} height={22} src={'/symbols/person.crop.square.on.square.angled.fill.svg'} alt='icon' />
                            <span className='text-[0.8rem] font-sf-regular'>Contacto</span>
                        </button>
                        <button onClick={() => clickLocation()}
                            className={`flex w-full gap-2  items-center p-1 rounded-lg ${isLocation ? 'bg-accent' : 'hover:bg-neutral-500'}`}>                                <Image width={22} height={22} src={'/symbols/location.square.fill.svg'} alt='icon' />
                            <span className='text-[0.8rem] font-sf-regular'>Locacion</span>
                        </button>
                        <button onClick={() => clickIdiomas()}
                            className={`flex w-full gap-2  items-center p-1 rounded-lg ${isIdiomas ? 'bg-accent' : 'hover:bg-neutral-500'}`}>                                <Image width={22} height={22} src={'/symbols/rupeesign.square.fill.svg'} alt='icon' />
                            <span className='text-[0.8rem] font-sf-regular'>Idiomas</span>
                        </button>
                        <button onClick={() => clickEstudios()}
                            className={`flex w-full gap-2  items-center p-1 rounded-lg ${isEstudios ? 'bg-accent' : 'hover:bg-neutral-500'}
                                 h-min`}>
                            <Image width={22} height={22} src={'/symbols/bookmark.square.fill.svg'} alt='icon' />
                            <span className='text-[0.8rem] font-sf-regular'>Estudios</span>
                        </button>
                    </div>
                </div>

                <div className='h-full w-full p-4'>
                    {/*   Intro   */}
                    <div className={`flex flex-col gap-4 ${isIntro ? '' : 'hidden'}`}>
                        <h3 className='font-bold text-white text-lg'>
                            Introduccion
                        </h3>
                        <p className='text-sm pr-14 font-sf-regular-rounded'>
                            Soy un desarrollador en conocimientos solidos en iOS con experiencia en proyectos reales en
                            el extranjero. Me adapto rápidamente a cualquier equipo de desarrollo, listo para aplicar mis
                            conocimientos en el desarrollo de aplicaciones moviles.
                        </p>
                    </div>

                    {/*   Contacto   */}
                    <div className={`flex flex-col gap-4 ${isContacto ? '' : 'hidden'}`}>
                        <h3 className='font-bold text-white text-lg'>
                            Contacto
                        </h3>
                        <p className='text-sm pr-14 font-sf-regular-rounded'>
                            Puedes cantactarme y en los siguientes enlaces:
                        </p>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Linkedln</span>
                                <a href="https://www.linkedin.com/in/jeanpiere-laura-lobreguez-815318185/" target="_blank" rel="noopener noreferrer"
                                    className=' text-xs w-52 truncate text-accent hover:underline'>
                                    https://www.linkedin.com/in/jeanpiere-laura-lobreguez-815318185/
                                </a>
                            </div>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>WhatsApp</span>
                                <a href="https://wa.me/+393282045613s" target="_blank" rel="noopener noreferrer"
                                    className=' text-xs w-52 truncate text-accent hover:underline'>
                                    +39 328 204 5613
                                </a>
                            </div>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Telefono</span>
                                <a href="tel:+51946272030"
                                    className=' text-xs w-52 truncate text-accent hover:underline'>
                                    +51 946 272 030
                                </a>
                            </div>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Correo</span>
                                <a href="mailto:jean.ganador12@gmail.com"
                                    className=' text-xs w-52 truncate text-accent hover:underline'>
                                    jean.ganador12@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*   Location   */}
                    <div className={`flex flex-col gap-4 ${isLocation ? '' : 'hidden'}`}>
                        <h3 className='font-bold text-white text-lg'>
                            Location
                        </h3>
                        <p className='text-sm pr-14 font-sf-regular-rounded'>
                            Actualmente me encuentro radicando en el Callao, con disponibilidad para
                            trabajar en todo Lima y disponible para trabajar en remoto y semi remoto.
                        </p>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Ultima Sede</span>
                                <span className=' w-20'>Milan - Italia</span>

                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Ahora</span>
                                <span className=' w-20'>Lima - Peru</span>

                            </div>
                        </div>
                    </div>

                    {/*   Idiomas   */}
                    <div className={`flex flex-col gap-4 ${isIdiomas ? '' : 'hidden'}`}>
                        <h3 className='font-bold text-white text-lg'>
                            Idiomas
                        </h3>
                        <p className='text-sm pr-14 font-sf-regular-rounded'>
                            Con experiencia en trabajos con personas de diferentes nacionalidades me he adaptado
                            y mejorado mis habilidades en diferentes idiomas.
                        </p>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Español</span>
                                <span className=' w-20'>Nativo</span>

                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Ingles</span>
                                <span className=' w-20'>Intermedio</span>

                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center font-sf-semibold-rounded text-sm'>
                                <span className=' w-20'>Italiano</span>
                                <span className=' w-20'>Intermedio</span>

                            </div>
                        </div>
                    </div>

                    {/*   Estudios   */}
                    <div className={`flex flex-col gap-4 ${isEstudios ? '' : 'hidden'}`}>

                        <h3 className='font-bold text-white text-lg'>
                            Datos Academicos
                        </h3>
                        <p className='text-xs pr-14 font-sf-regular-rounded'>
                            En constante aprendizaje y mi formacion a lo largo de los años.
                        </p>

                        <div className=' inline-flex flex-col gap-0 pb-2'>
                            <span className='font-bold'>Desarrollo de Software</span>
                            <span className='text-blue-700 font-sf-semibold-rounded text-sm'>Instituto superior tecnologico SENATI</span>
                            <span className='font-sf-ultrathin text-xs text-gray-400'>Enero 2019 - Diciembre 2022</span>
                        </div>

                        <div className=' inline-flex flex-col gap-0 pb-10'>
                            <span className='font-bold'>Elementos de la ciberseguridad</span>
                            <span className='text-blue-700 font-sf-semibold-rounded text-sm'>Cisco Networking Academy</span>
                            <span className='font-sf-ultrathin text-xs text-gray-400'>Febrero 2022 - Mayo 2022</span>
                        </div>

                        <div className='flex flex-col'>
                            <h3 className='font-bold text-white text-lg'>
                                Cursos extras
                            </h3>

                            <div className='list-none text-sm text-gray-300 font-thin'>
                                <li className=''>- Entornos moviles IOS 17 y nuevo paradigma Apple</li>
                                <li className=''>- Curso SwiftUI</li>
                                <li className=''>- Curso de Git & GitHub</li>
                                <li className=''>- Curso de NextJS 14</li>
                                <li className=''>- Desarrollo de webs con Tailwind & Bootstrap</li>
                                <li className=''>- Implementacion de sistemas UML</li>
                                <li className=''>- Desarrollo en plataformas mobiles</li>
                            </div>
                        </div>



                    </div>
                </div>


            </div>

        </div>
    )
}
