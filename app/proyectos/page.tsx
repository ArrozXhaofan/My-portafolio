"use client"

import Image from "next/image";
import { useEffect } from 'react';


import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollDownButton from "../Components/ScrollButtons/ScrollDownButton";
import ScrollUpButton from "../Components/ScrollButtons/ScrollUpButton";
import ProjectView from "../Components/ProjectView/ProjectView";
import { ProjectModel } from "@/models";

export default function Proyectos() {

    useEffect(() => {
        AOS.init({
            duration: 3000, // Ajusta la duración si es necesario
        });
    }, []);

    const dataTest: ProjectModel[] = [
        {
            title: 'Primer Projecto',
            description: 'Este es mi projecto numero uno qeue necesito para mostrasl los que puedo haer yed t no se qumasl para demosdsrer fdsfgtg hgh pequeña descriopcion de mi proee fd proyecto fsdf gfg f',
            imgReferences: ['/projects/p1.png','/projects/p1.png','/projects/p1.png'],
            githubRepository: 'https://www.instagram.com/direct/inbox/',
            reverse: false
        },
        {
            title: 'Segundo Projecto',
            description: 'Este es mi projecto numero uno qeue necesito para mostrasl los que puedo haer yed t no se qumasl para demosdsrer fdsfgtg hgh pequeña descriopcion de mi proee fd proyecto fsdf gfg f',
            imgReferences: ['/projects/p1.png','/projects/p1.png','/projects/p1.png'],
            githubRepository: 'https://www.instagram.com/direct/inbox/',
            reverse: true
        },
        {
            title: 'tercer Projecto',
            description: 'Este es mi projecto numero uno qeue necesito para mostrasl los que puedo haer yed t no se qumasl para demosdsrer fdsfgtg hgh pequeña descriopcion de mi proee fd proyecto fsdf gfg f',
            imgReferences: ['/projects/p1.png','/projects/p1.png','/projects/p1.png'],
            githubRepository: 'https://www.instagram.com/direct/inbox/',
            reverse: false
        }
    ]

    return (

        <div className="w-full max-w-4xl min-h-screen pt-7
            flex flex-col justify-center items-center
        ">

            <div className="flex flex-col items-center gap-7 h-screen justify-center relative">
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

                    <img data-aos='zoom-in' data-aos-delay={3000} data-aos-duration={1000}
                        src="/pro-mac-bg.jpg" alt="" />
                </div>

                <ScrollDownButton scroll={500} />


            </div>

            <div>

                {
                    dataTest.map((project, index) => (
                        <ProjectView dato={project} key={index} />
                    ))
                }

            </div>

            <div className="p-10">
                <ScrollUpButton />
            </div>

        </div>
    )
}