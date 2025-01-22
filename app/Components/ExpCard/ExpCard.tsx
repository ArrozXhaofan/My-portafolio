import React from 'react'
import Image from 'next/image'

interface SubTask {
    name: string
    time: string
}

export interface ExpModel {
    empresa: string
    cargo: string
    description: string
    subTasks: SubTask[]
}

interface Props {
    data: ExpModel
}

export default function ExpCard({data}: Props) {

    const linesIndex = data.subTasks.length - 2

    return (
        <div className='w-full flex flex-col justify-center items-center bg-secodary py-9 gap-12' id={data.empresa}>

            <Image width={245} height={150} src={'/exp-p2.png'} alt='oasf' />

            <div className='flex flex-col gap-1 justify-center items-center'>
                <span className='font-sf-semibold text-sf-gray text-'>{data.empresa}</span>
                <span className='font-sf-semibold-rounded text-white text-xl'>{data.cargo}</span>

                <p className='text-sf-gray font-sf-thin text-sm px-8 text-center p-1'>
                    {data.description}
                </p>
            </div>

            <div className='flex  w-full px-7 gap-3
                            md:justify-center'>

                <div className='flex flex-col items-center gap-[30px] relative '>
                    <div className='absolute z-10 top-[15]'>
                        {
                            data.subTasks.map((_,index) => (
                                index < linesIndex ?
                                <div key={index} className='h-[60] w-[1] top-[15] bg-gray-800'></div> : 
                                <div key={index} className='hidden'></div>
                            ))
                        }
                        <div className='h-[60] w-[1] top-[15] bg-gray-800'></div>
                    </div>
                    {
                        data.subTasks.map((_,index) => (
                            <div key={index} className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-800 z-20'>
                                <Image width={15} height={15} src={'/symbols/square.fill.text.grid.1x2.svg'} alt='icon'
                                    className='' />
                            </div>
                        ))
                    }
                </div>

                <div className=' h-full flex flex-col gap-[15]'>
                    {
                        data.subTasks.map(item => (
                            <div className='h-fit' key={item.name}>
                                <span className='text-blue-500 text-sm'>{item.name}</span>

                                <span className='text-sf-gray flex gap-[8]'>
                                    <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                                    <span className='font-light text-[0.8rem]'>{item.time}</span>
                                </span>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
