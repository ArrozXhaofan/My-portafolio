"use client"

import Image from 'next/image'
import Navigatore, { SubNavConfiguration } from '../Components/Nav/Nav'
import ExpCard from '../Components/ExpCard/ExpCard'
import { ExpReposotory } from '../Repositories'
import ScrollUpButton from '../Components/ScrollButtons/ScrollUpButton'




export default function ExperienciaView() {

    const repository = new ExpReposotory()

    const navItems: SubNavConfiguration = {
        title: 'Experiencia',
        items: [
            'DarkSam S.A.C 2',
            "VuelaItalia Viaggi",
            'Milanopost Express',
            'DarkSam S.A.C'
        ]
    }

    return (
        <>
            <Navigatore setting={navItems} />

            <div className='text-white w-full max-w-3xl min-h-screen bg-secodary flex flex-col justify-start items-center pt-20
        lg:pt-14'>

                <div className='flex flex-col items-center gap-4 pt-10'>

                    <h1 className='text-white text-3xl'>
                        Mi experiencia
                    </h1>

                    <p className=' font-sf-thin text-md text-center w-80'>
                        Toda mi experiencia profesional como desarrollador y ejerciendo en el mundo
                        de la informatica y tecnologia compartiendo y aportando a mi equipo.
                    </p>

                    <div className='flex items-center text-sf-gray gap-[3px]'>
                        <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                        <span className='text-[1.1rem]'>2yr 1months</span>
                        <span className='font-thin text-[0.75rem]'>Estimated Time</span>
                    </div>

                    <button className='bg-accent rounded-full py-[2px] px-4 mt-3'>
                        <span className='font-light text-sm '>
                            Get started
                        </span>
                    </button>

                    <Image width={500} height={500} src="/exp-p1.png" alt="exp photo 1"
                        className='p-6 max'
                    />

                </div>

                <div className='h-6 w-full bg-black'>
                </div>


                <div className='flex flex-col gap-0.5 bg-black'>

                    {
                        repository.allData.map((item) => (
                            <ExpCard data={item} key={item.empresa} />
                        ))
                    }
                </div>

            </div>

            <div className='p-7'>
                <ScrollUpButton />

            </div>
        </>

    )
}
