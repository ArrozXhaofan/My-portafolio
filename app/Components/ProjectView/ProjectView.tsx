"use client"

import { useState } from "react";
import { ProjectModel } from "@/models";

import Image from "next/image";

interface Props {
    data: ProjectModel
}

export default function ProjectView({ data }: Props) {

    const [coordinate, setCoordinate] = useState(0)
    const [scrollIndex, setScrollIndex] = useState(2)

    const max = data.imgReferences.length

    function prevScroll() {
        if (scrollIndex <= 1) {
            //console.log('minimo')
        } else {
            setScrollIndex(scrollIndex - 1)
            setCoordinate(coordinate + 315)
        }
    }

    function nextScroll() {

        if (scrollIndex >= max) {
           //console.log('maximo')
        } else {
            setScrollIndex(scrollIndex + 1)
            setCoordinate(coordinate - 315)
        }
    }

    return (

        <div className="max-w-4xl w-full flex flex-col md:flex-row ">

            <div className="lg:w-1/2 flex flex-col">

                <div style={{transform: `translateX(${coordinate}px)`}}
                className={`flex items-center duration-500 delay-150 ease-in-out justify-center gap-5 
                    md:gap-2
                `}>
                    {
                        data.imgReferences.map((imgUrl, index) => (
                            <Image width={300} height={200} src={imgUrl} alt="Project Image" key={index}
                                className={`${scrollIndex == index ? 'opacity-20' : 'opacity-100'}
                                    rounded-[45px] border-[0.5px] border-neutral-700 transition-all duration-300
                                    md:w-28 md:rounded-[17px]`}
                            />
                        ))
                    }
                </div>

            {/*Scroll buttons */}
                <div className="flex gap-28 select-none md:hidden items-center justify-center py-10 border">

                <button onClick={()=> prevScroll()} className="a">
                        <div className={`
                        ${scrollIndex <= 1 ? 'opacity-20' : 'group active:bg-neutral-800 active:border-[0.5px] '}
                        rounded-full w-[45px] h-[45px]  border-neutral-600 transition-all
                        flex justify-center items-center duration-50 ease-in-out`}>
                            <Image width={20} height={20} src='/symbols/chevron.left.svg' alt="prev image" 
                                className="group-active:scale-95 duration-50"
                            />

                        </div>
                    </button>

                    <button onClick={()=> nextScroll()} className="a">
                        <div className={`
                        ${scrollIndex >= max ? 'opacity-20' : 'group active:bg-neutral-800 active:border-[0.5px] '}
                        rounded-full w-[45px] h-[45px]  border-neutral-600 transition-all
                        flex justify-center items-center duration-50 ease-in-out`}>
                            <Image width={20} height={20} src='/symbols/chevron.right.svg' alt="prev image" 
                                className="group-active:scale-95 duration-50"
                            />

                        </div>
                    </button>

                </div>

            </div>
    
            <div className="lg:w-1/2 ">
                <span>projexts images</span>

            </div>

        </div>

    )


}