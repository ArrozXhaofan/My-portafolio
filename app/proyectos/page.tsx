"use client"

import { ProjectModel } from "@/models";
import Image from "next/image";
import { useEffect } from 'react';


import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Proyectos() {

    useEffect(() => {
        AOS.init({
            duration: 3000, // Ajusta la duración si es necesario
        });
    }, []);


    /*const prop: ProjectModel = {
        title: "Projecto 1",
        description: "Este es mi projecto numero uno qeue necesito para mostrasl los que puedo haer yed t no se qumasl",
        imgReferences: [
            '/proyects/p4.png',
            '/proyects/p1.png',
            '/proyects/p3.png',

        ],
        githubRepository: 'https://github.com/ArrozXhaofan/My-portafolio'
    }*/




    return (

        <div className="w-full max-w-4xl min-h-screen pt-12
            flex flex-col justify-center items-center
        ">

            <div className="flex flex-col items-center gap-7">
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

                <div className="flex flex-col md:flex-row md:gap-14 pt-10 gap-10">

                    <Image data-aos={'zoom-in'} data-aos-delay={4000} data-aos-duration={1500}
                        width={215} height={80} src={'/proyects/p2.png'} alt=""
                        className=" transition-all rounded-[1.8rem] drop-shadow-project 
                        hover:drop-shadow-project-cyan 
                        md:duration-500  md:delay-[3500ms]"
                    />

                    <Image data-aos={'zoom-in'} data-aos-delay={4000} data-aos-duration={1500}
                        width={215} height={80} src={'/proyects/p3.png'} alt=""
                        className=" transition-all rounded-[1.8rem] drop-shadow-project 
                        hover:drop-shadow-project-cyan 
                        md:duration-500  md:delay-[3500ms]"
                    />

                    <Image data-aos={'zoom-in'} data-aos-delay={4000} data-aos-duration={1500}
                        width={215} height={80} src={'/proyects/p4.png'} alt=""
                        className=" transition-all rounded-[1.8rem] drop-shadow-project 
                        hover:drop-shadow-project-cyan 
                        md:duration-500  md:delay-[3500ms]"
                    />
                </div>


            </div>


        </div>
    )
}