import React from 'react'
import Image from 'next/image'

export default function ExperienciaView() {
    return (

        <div className='text-white w-full max-w-3xl min-h-screen bg-secodary flex flex-col justify-start items-center pt-12
        lg:pt-7'>

            <nav className='w-screen h-12 backdrop-blur-md bg-neutral-500 bg-opacity-50 flex justify-center 
            border-b-[0.5px] border-neutral-500'>
                <div className='w-full max-w-3xl '>
                    Hola dasd
                </div>
            </nav>

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
                //              INSERTE MAP PROJECTS
            }

                <div className='w-full flex flex-col justify-center items-center
             bg-secodary py-9 gap-12'>

                    <Image width={245} height={0} src={'/exp-p2.png'} alt='oasf' />

                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <span className='font-sf-semibold text-sf-gray text-'>Max Printers</span>
                        <span className='font-sf-semibold-rounded text-white text-xl'>Swift & Web Developer</span>

                        <p className='text-sf-gray font-sf-thin text-sm px-8 text-center p-1'>
                            Learn how to use SwiftUI to compose rich views out of simple ones, set up data flow, and
                            build the navigation while watching it unfold in Xcodes preview.
                        </p>
                    </div>

                    <div className='flex  w-full px-7 gap-3
                        md:justify-center'>

                        <div className='flex flex-col items-center gap-[30px] relative '>
                            <div className='absolute z-10 top-[15]'>
                                <div className='h-[60] w-[1] top-[15] bg-gray-800'></div>
                                <div className='h-[60] w-[1] top-[15] bg-gray-800'></div>
                            </div>
                            <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-800 z-20'>
                                <Image width={15} height={15} src={'/symbols/square.fill.text.grid.1x2.svg'} alt='icon'
                                    className='' />
                            </div>
                            <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-800 z-20'>
                                <Image width={15} height={15} src={'/symbols/square.fill.text.grid.1x2.svg'} alt='icon'
                                    className='' />
                            </div>
                            <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-800 z-20'>
                                <Image width={15} height={15} src={'/symbols/square.fill.text.grid.1x2.svg'} alt='icon'
                                    className='' />
                            </div>
                        </div>

                        <div className=' h-full flex flex-col gap-[15]'>
                            <div className='h-fit'>
                                <span className='text-blue-500 text-sm'>Creating and combinin views</span>

                                <span className='text-sf-gray flex gap-[8]'>
                                    <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                                    <span className='font-light text-[0.8rem]'>7meses</span>
                                </span>
                            </div>
                            <div className=' h-fit'>
                                <span className='text-blue-500 text-sm'>Creating and combinin views</span>

                                <span className='text-sf-gray flex gap-[8]'>
                                    <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                                    <span className='font-light text-[0.8rem]'>7meses</span>
                                </span>
                            </div>

                            <div className=' h-fit'>
                                <span className='text-blue-500 text-sm'>Creating and combinin views</span>

                                <span className='text-sf-gray flex gap-[8]'>
                                    <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                                    <span className='font-light text-[0.8rem]'>7meses</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center
             bg-secodary py-9 gap-12'>

                    <Image width={245} height={0} src={'/exp-p2.png'} alt='oasf' />

                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <span className='font-sf-semibold text-sf-gray text-'>Max Printers</span>
                        <span className='font-sf-semibold-rounded text-white text-xl'>Swift & Web Developer</span>

                        <p className='text-sf-gray font-sf-thin text-sm px-8 text-center p-1'>
                            Learn how to use SwiftUI to compose rich views out of simple ones, set up data flow, and
                            build the navigation while watching it unfold in Xcodes preview.
                        </p>
                    </div>

                    <div className='flex  w-full px-7 gap-3
                        md:justify-center'>

                        <div className='flex flex-col items-center gap-[30px] relative '>
                            <div className='absolute z-10 top-[15]'>
                                <div className='h-[60] w-[1] top-[15] bg-gray-800'></div>
                                <div className='h-[60] w-[1] top-[15] bg-gray-800'></div>
                            </div>
                            <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-800 z-20'>
                                <Image width={15} height={15} src={'/symbols/square.fill.text.grid.1x2.svg'} alt='icon'
                                    className='' />
                            </div>
                            <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-800 z-20'>
                                <Image width={15} height={15} src={'/symbols/square.fill.text.grid.1x2.svg'} alt='icon'
                                    className='' />
                            </div>
                            <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-800 z-20'>
                                <Image width={15} height={15} src={'/symbols/square.fill.text.grid.1x2.svg'} alt='icon'
                                    className='' />
                            </div>
                        </div>

                        <div className=' h-full flex flex-col gap-[15]'>
                            <div className='h-fit'>
                                <span className='text-blue-500 text-sm'>Creating and combinin views</span>

                                <span className='text-sf-gray flex gap-[8]'>
                                    <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                                    <span className='font-light text-[0.8rem]'>7meses</span>
                                </span>
                            </div>
                            <div className=' h-fit'>
                                <span className='text-blue-500 text-sm'>Creating and combinin views</span>

                                <span className='text-sf-gray flex gap-[8]'>
                                    <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                                    <span className='font-light text-[0.8rem]'>7meses</span>
                                </span>
                            </div>

                            <div className=' h-fit'>
                                <span className='text-blue-500 text-sm'>Creating and combinin views</span>

                                <span className='text-sf-gray flex gap-[8]'>
                                    <Image width={12} height={12} src={'/symbols/timer.svg'} alt='icon timer' />
                                    <span className='font-light text-[0.8rem]'>7meses</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
