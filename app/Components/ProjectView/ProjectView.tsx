"use client"

import { ProjectModel } from "@/models";
import Image from "next/image";


interface Props {
    data: ProjectModel
}

export default function ProjectView({ data }: Props) {

    const dato: ProjectModel = {
        title: 'Segundo Projecto',
        description: 'Este es mi projecto numero uno qeue necesito para mostrasl los que puedo haer yed t no se qumasl para demosdsrer fdsfgtg hgh pequeña descriopcion de mi proee fd proyecto fsdf gfg f',
        imgReferences: ['/projects/p1.png','/projects/p1.png','/projects/p1.png'],
        githubRepository: 'https://www.instagram.com/direct/inbox/',
        reverse: false
    }


    return (

        <div className={`flex flex-col  justify-center items-center gap-10 py-20 
                            ${dato.reverse ? 'lg:flex-row-reverse': 'lg:flex-row'} lg:items-start lg:gap-20
                        `}>
            <div className="flex flex-col items-center gap-6 
                                lg:w-[50%] lg:h-full lg:items-start 
                            ">
                <span className="text-3xl font-bold text-white">{dato.title}</span>
                <p className="text-gray-300 text-sm text-center px-5
                                    md:max-w-[500px] lg:text-start lg:px-0">
                    {dato.description}
                </p>
                <a href={dato.githubRepository} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline">
                    <span className="text-accent text-sm hover:underline">Ver repositorio</span>
                    <Image width={12} height={12} src={'/symbols/arrow.up.right.square.svg'} alt="icon"
                    />
                </a>
            </div>

            <div className=" flex justify-center items-center group hover:drop-shadow-project duration-700">
                <Image
                    width={170} height={0} src={'/proyects/p1.png'} alt="proyecto 1"
                    className={`border-[0.5px] border-neutral-500 transition-all duration-700 ease-in-out
                                    hover:drop-shadow-project-cyan 
                                    z-0 translate-x-28 hover:translate-x-[100px]  group-hover:translate-x-20
                                     rounded-[1.5rem]  cursor-pointer`}
                />
                <Image
                    width={170} height={0} src={'/proyects/p4.png'} alt="proyecto 1"
                    className={`border-[0.5px] border-neutral-500 transition-all duration-700 ease-in-out
                                        hover:drop-shadow-project-cyan group-hover:scale-105
                                        
                                        rounded-[1.5rem] z-10 cursor-pointer`}
                />
                <Image
                    width={170} height={0} src={'/proyects/p5.png'} alt="proyecto 1"
                    className={`border-[0.5px] border-neutral-500 transition-all duration-700 ease-in-out
                                    hover:drop-shadow-project-cyan 
                                    z-0 -translate-x-28 hover:-translate-x-[100px]  group-hover:-translate-x-20
                                    rounded-[1.5rem]  cursor-pointer`}
                />
            </div>



        </div>

    )


}