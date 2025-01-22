"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Navigatore, { SubNavConfiguration } from '../Components/Nav/Nav'
import ExpCard, { ExpModel } from '../Components/ExpCard/ExpCard'
export default function ExperienciaView() {

    const [isOpen, getIsOpen] = useState(false)

    function clickOpen() {
        getIsOpen(!isOpen)
    }

    const data: ExpModel[] = [
        {
            empresa: "Max Printers",
            cargo: "Web Developer",
            description: "Con un año y medio en empresa me dedico en el area de informatica apoyando a los ",
            subTasks: [
                { name: 'Diseño de paginas web con figma', time: '3 meses' },
                { name: 'Apoyo al backend y diseño de la base de datos', time: '7 meses' },
                { name: 'Mantenimiento de las paginas web', time: '1 año' },
                { name: 'Apoyo al equipo de diseño UI/UX', time: '6 meses' },

            ]
        },
        {
            empresa: "VuelaItalia Viaggi",
            cargo: "Web Developer",
            description: "Con un año y medio en empresa me dedico en el area de informatica apoyando a los ",
            subTasks: [
                { name: 'Diseño de paginas web con figma', time: '3 meses' },
                { name: 'Apoyo al backend y diseño de la base de datos', time: '7 meses' },
                { name: 'Mantenimiento de las paginas web', time: '1 año' },
                { name: 'Apoyo al equipo de diseño UI/UX', time: '6 meses' },

            ]
        },
        {
            empresa: "MilanoPost Xpress",
            cargo: "Web Developer",
            description: "Con un año y medio en empresa me dedico en el area de informatica apoyando a los ",
            subTasks: [
                { name: 'Diseño de paginas web con figma', time: '3 meses' },
                { name: 'Apoyo al backend y diseño de la base de datos', time: '7 meses' },
                { name: 'Mantenimiento de las paginas web', time: '1 año' },
                { name: 'Apoyo al equipo de diseño UI/UX', time: '6 meses' },

            ]
        }
    ]

    const navItems: SubNavConfiguration = {
        title: 'Experiencia',
        items: [
            "Max Printers", "VuelaItalia Viaggi", "MilanoPost Xpress"
        ]
    }



    return (
        <>
            <Navigatore  data={navItems} />

            <div className='text-white w-full max-w-3xl min-h-screen bg-secodary flex flex-col justify-start items-center pt-12
        lg:pt-7'>

                <div className='flex flex-col items-center gap-4 pt-10'>

                    <h1 className='text-white text-3xl'>
                        Mi experiencia
                    </h1>

                    <p className=' font-sf-thin text-md text-center w-80'>
                        Tea toda mi experiencia profesional como desarrollador y ejerciendo en el mundo
                        de la informatica y tecnologia compartiendo y aportando a mi equipo
                    </p>

                    <div className='flex items-center text-sf-gray gap-[3px]'>
                        <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                        <span className='text-[1.1rem]'>1yr 8months</span>
                        <span className='font-thin text-[0.75rem]'>Estimated Time</span>
                    </div>

                    <button className='bg-accent rounded-full py-[2px] px-4 mt-3'>
                        <span className='font-light text-sm '>
                            Get started
                        </span>
                    </button>

                    <img src="/exp-p1.png" alt="exp photo 1"
                        className='p-6 max'
                    />

                </div>

                <div className='h-6 w-full bg-black'>
                </div>


                <div className='flex flex-col gap-0.5 bg-black'>

                    {
                        data.map((item) => (
                            <ExpCard data={item} key={item.empresa} />
                        ))

                    }
                </div>

            </div>
        </>

    )
}
