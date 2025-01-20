"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';


import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Proyectos() {

    useEffect(() => {
        AOS.init({
            duration: 3000, // Ajusta la duración si es necesario
        });
    }, []);

    const [push, getPush] = useState(false)
    const [push2, getPush2] = useState(false)
    const [push3, getPush3] = useState(false)

    return (

        <div className="w-full max-w-4xl min-h-screen pt-12
            flex flex-col justify-center items-center
        ">

            <div className="flex flex-col items-center gap-7 pt-20">
                <Image data-aos={'fade-down'} data-aos-delay={500} data-aos-duration={2000}
                    width={80} height={80} src={'/icons/appkit.png'} alt=""
                    className=" object-contain" />

                <h1 data-aos={'zoom-up'} data-aos-delay={2500} data-aos-duration={1000}
                    className="text-white font-semibold text-4xl">
                    Build for iOS 18
                </h1>

                <p data-aos={'zoom-up'} data-aos-delay={3000} data-aos-duration={1000}
                    className="text-gray-300 max-w-[650px] text-center px-5">
                    Algunos de mis proyectos que estoy y he desarrollado para demostrar algunas de
                    mis habilidades aprendidas en entornos Apple, mejorando mis habilidades como profesional.
                </p>

                <div className="flex justify-center items-center py-20">

                    <img data-aos='zoom-in' data-aos-delay={3000}  data-aos-duration={1000}
                        src="/pro-mac-bg.jpg" alt="" />
                </div>


                <div className="flex flex-col  justify-center items-center gap-10 py-20 
                    lg:flex-row-reverse lg:items-start lg:gap-20
                ">

                    <div className="flex flex-col items-center gap-6 
                        lg:w-[50%] lg:h-full lg:items-start 
                    ">
                        <span className="text-3xl font-bold text-white">My Primer Proyecto</span>
                        <p className="text-gray-300 text-sm text-center px-5
                            md:max-w-[500px] lg:text-start lg:px-0">
                            Este es mi projecto numero uno qeue necesito para mostrasl los que puedo haer yed t no se qumasl
                            para demosdsrer fdsfgtg hgh pequeña descriopcion de mi proee fd proyecto fsdf gfg f
                        </p>
                        <a href="https://github.com/ArrozXhaofan/My-portafolio" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:underline">
                            <span className="text-accent text-sm hover:underline">Ver repositorio</span>
                            <Image width={12} height={12} src={'/symbols/arrow.up.right.square.svg'} alt="icon"
                            />
                        </a>
                    </div>

                    <div className=" flex justify-center items-center group">
                        <Image onClick={() => getPush(!push)}
                            width={170} height={0} src={'/proyects/p1.png'} alt="proyecto 1"
                            className={`border-[0.5px] border-neutral-500 transition-all duration-500 ease-in-out
                            hover:drop-shadow-project-cyan 
                            ${push ? 'scale-125 z-30 translate-x-[170px]' : 'z-0 translate-x-28 hover:translate-x-[100px]  group-hover:translate-x-20'}
                             rounded-[1.5rem]  cursor-pointer`}
                        />
                        <Image onClick={() => getPush2(!push2)}
                            width={170} height={0} src={'/proyects/p4.png'} alt="proyecto 1"
                            className={`border-[0.5px] border-neutral-500 transition-all duration-500 ease-in-out
                                hover:drop-shadow-project-cyan
                                ${push2 ? 'scale-125' : ''}
                                rounded-[1.5rem] z-10 cursor-pointer`}
                        />
                        <Image onClick={() => getPush3(!push3)}
                            width={170} height={0} src={'/proyects/p5.png'} alt="proyecto 1"
                            className={`border-[0.5px] border-neutral-500 transition-all duration-500 ease-in-out
                            hover:drop-shadow-project-cyan 
                            ${push3 ? 'scale-125 z-30 -translate-x-[170px]' : 'z-0 -translate-x-28 hover:-translate-x-[100px]  group-hover:-translate-x-20'}
                             rounded-[1.5rem]  cursor-pointer`}
                        />
                    </div>



                </div>



            </div>
        </div>
    )
}