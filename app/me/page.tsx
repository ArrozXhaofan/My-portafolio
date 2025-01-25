import React from 'react'
import Image from 'next/image'
import Navigatore from '../Components/Nav/Nav'
import { MiniCardModel } from '../Components'
import MiniCard from '../Components/MiniCard/MiniCard'



export default function Me() {

    const testable: MiniCardModel[] = [
        {
            imgUrl: '/symbols/graduationcap.svg',
            text: 'Estudios en el Instituto superior Senati  en la carrera de ',
            endText: 'desarrollo de software.',
        },
        {
            imgUrl: '/symbols/chart.bar.svg',
            initText: 'En constante aprendizaje ',
            text: 'en el desarrollo iOS y  ',
            endText: 'hibrido con Flutter',
        },
        {
            imgUrl: '/symbols/building.2.svg',
            initText: 'Experiencia certificada en el extranjero, ',
            text: 'Aportando a equipos en diferentes idiomas',
        },
        {
            imgUrl: '/symbols/network.svg',
            text: 'Mira mi resumen para obtener mas detalles.',
            link: { name: 'Ver curriculim vitae', path: '/files/cv_jeanlaura.pdf' }
        },
    ]

    return (
        <>
            <Navigatore />

            <div className='w-full max-w-4xl bg-gray-me py-20 pt-32 flex flex-col items-center px-2 md:px-0'>

                <h1 className='text-center text-white text-5xl font-semibold w-[420px] '>
                    Mas informacion sobre mi
                </h1>

                <h3 className='text-xs text-sf-gray font-medium md:w-[420px] text-center py-6'>
                    Soy un desarrollador en
                    conocimientos solidos en iOS con
                    experiencia en proyectos reales en
                    el extranjero. Me adapto
                    rápidamente a cualquier equipo de
                    desarrollo, listo para aplicar mis
                    conocimientos en el desarrollo de
                    aplicaciones moviles.
                </h3>

                <div className='flex flex-wrap md:flex-row justify-center px-0'>
                    {
                        testable.map((data, index) => (
                            <MiniCard data={data} key={index} />
                        ))
                    }
                </div>


            </div>

            <div className='max-w-[55rem] min-h-screen w-full py-20 '>


                <h5 className='text-5xl font-sf-hello text-center text-white py-20'>
                    Mucho mas que un desarrollador
                </h5>

                <div className='grid grid-rows-8 md:grid-rows-4 md:grid-cols-2 gap-8 w-full h-[1000px] md:h-[700px] px-5'>


                    <div className="bg-[url('/paddington.jpeg')] bg-cover text-white rounded-[1.8rem] bg-center
                    relative  overflow-hidden row-span-3 col-span-1">
                        <div className='w-full h-full absolute z-0 bg-gradient-to-b from-transparent to-gray-me left-0'></div>
                        <div className='flex flex-col gap-3 z-10 absolute bottom-[40px] left-[40px]'>
                            <Image width={95} height={95} src='/symbols/macbook.gen2.svg' alt='laptop'
                                className='z-10 '
                            />
                            <p className='text-white text-4xl font-semibold w-[300px]'>
                                Español, Italiano, Ingles
                            </p>
                        </div>

                    </div>

                    <div className=" row-span-2 md:row-span-1 col-span-1
                    bg-gray-me text-white rounded-[1.8rem] shadow-inner-gradient drop-shadow-project-cyan
                        p-10 flex justify-start items-center">
                        <div className='flex items-center gap-5'>
                            <Image width={70} height={70} src='/symbols/apple.intelligence.svg' alt='icon' />
                            <span className='text-white font-bold text-xl'>Ahora en Lima - Peru.</span>
                        </div>
                    </div>

                    <div className="bg-[url('/paddington2.jpg')] bg-cover text-white rounded-[1.8rem] bg-center
                    relative overflow-hidden row-span-3 col-span-1">
                        <div className='w-full h-full absolute z-0 bg-gradient-to-b from-transparent to-gray-me left-0'></div>
                        <div className='flex flex-col gap-3 z-10 absolute bottom-[40px] left-[40px]'>
                            <Image width={95} height={95} src='/symbols/person.crop.square.on.square.angled.fill.svg' alt='laptop'
                                className='z-10 '
                            />
                            <p className='text-white text-4xl font-semibold w-[300px]'>
                                Con dos años de experiencia en el rubro.
                            </p>
                        </div>

                    </div>

                    <div className=" row-span-2 md:row-span-1 col-span-1
                    bg-gray-me text-white rounded-[1.8rem]
                        p-10 flex justify-start items-center">
                        <div className='flex items-center gap-5'>
                            <Image width={70} height={70} src='/symbols/apple.svg' alt='icon' />
                            <span className='text-white font-medium text-xl'>Desarrollo iOS y front-end.</span>
                        </div>
                    </div>


                </div>

                <h5 className='text-5xl font-sf-hello text-center text-white py-20'>
                    Muchas gracias
                </h5>


            </div>

        </>

    )
}
