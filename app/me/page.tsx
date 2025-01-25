import React from 'react'
import Image from 'next/image'
import Navigatore from '../Components/Nav/Nav'
import { MiniCardModel } from '../Components'
import MiniCard from '../Components/MiniCard/MiniCard'



export default function Me() {

    const testable: MiniCardModel = {
        imgUrl: '/symbols/network.svg',
        //initText: 'Privacy is a fundamental human right. ',
        text: 'The best technology works for everyone. Thats why our products and services are ',
        endText: 'inclusive by design.',
        link: { name: 'More on Apple and privacy', path: '#' }
    }

    return (
        <>
            <Navigatore />

            <div className='w-full max-w-4xl bg-gray-me py-20 flex flex-col items-center'>

                <h1 className='text-center text-white text-5xl font-semibold w-[420px] '>
                    Designed to make a difference.
                </h1>

                <h3 className='text-xs text-sf-gray font-medium w-[420px] text-center py-6'>
                    What matters to you matters to Apple, too. From using more recycled content that minimizes
                    environmental impact. To privacy protections that give you more control over your data. To
                    creating built-in features that make Mac accessible to all.
                </h3>

                <div className='flex flex-wrap md:flex-row justify-center'>
                    <MiniCard data={testable} />
                    <MiniCard data={testable} />
                    <MiniCard data={testable} />
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
                                Fly through demanding tasks up to 9.8x faster.*
                            </p>
                        </div>

                    </div>

                    <div className=" row-span-2 md:row-span-1 col-span-1
                    bg-gray-me text-white rounded-[1.8rem] shadow-inner-gradient drop-shadow-project-cyan
                        p-10 flex justify-start items-center">
                        <div className='flex items-center gap-5'>
                            <Image width={70} height={70} src='/symbols/apple.intelligence.svg' alt='icon' />
                            <span className='text-white font-bold text-xl'>Built for Apple Intelligence.</span>
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
                                Fly through demanding tasks up to 9.8x faster.*
                            </p>
                        </div>

                    </div>

                    <div className=" row-span-2 md:row-span-1 col-span-1
                    bg-gray-me text-white rounded-[1.8rem]
                        p-10 flex justify-start items-center">
                        <div className='flex items-center gap-5'>
                            <Image width={70} height={70} src='/symbols/apple.svg' alt='icon' />
                            <span className='text-white font-medium text-xl'>Built for Apple Iddntelligence.</span>
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
