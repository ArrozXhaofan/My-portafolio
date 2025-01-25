"use client"

import { useEffect } from 'react';
import Image from 'next/image';

import AOS from 'aos'
import 'aos/dist/aos.css'

import ScrollDownButton from './Components/ScrollButtons/ScrollDownButton';
import ScrollUpButton from './Components/ScrollButtons/ScrollUpButton';
import Navigatore from './Components/Nav/Nav';
import Card, { CardModel } from './Components/Card/Card';


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Ajusta la duración si es necesario
    });
  }, []);

  const testCard1: CardModel = {
    subtitle: 'Nuevas tecnologias',
    title: 'Creacion de web y apps para iOS',
    text: 'Con mis conocimientos crear applicaciones y webs amigables al usuario.',
  }

  const testCard2: CardModel = {
    subtitle: 'Nuevas tecnologias',
    title: 'Creacion de web y apps para iOS',
    text: 'Con mis conocimientos crear applicaciones y webs amigables al usuario.',
    dark: true
  }

  return (
    <>
      <Navigatore />

      <div className="max-w-4xl min-h-screen flex flex-col gap-5 justify-center items-center relative">
        <img
          data-aos-delay="1000" data-aos-duration="3000" data-aos="fade up"
          src="hello1.png" alt="Frase inial"
          className='object-contain w-[250px] h-[120px] pointer-events-none select-none' />
        <div className='flex flex-col gap-0 items-center'>
          <h1
            data-aos-delay="1500"
            data-aos-duration="3000"
            data-aos="fade up"
            className='text-4xl text-white font-sf-semibold text-shadow-glow'>
            Jeanpiere Laura
          </h1>
          <h1 data-aos-delay="1900"
            data-aos-duration="3000"
            data-aos="fade up"
            className='text-xl text-white font-sf-regular-rounded'>
            iOS Developer
          </h1>
        </div>

        <Image width={500} height={300} src={'/inicio/p1.png'} alt='iphone'
          data-aos-delay="2500"
          data-aos-duration="2000"
          data-aos="zoom-in"
          className='py-20 drop-shadow-project-cyan'
        />

        <ScrollDownButton scroll={500} />


      </div>


      <div className='max-w-5xl p-5'>
        <div className=' text-white'>
          <h3 data-aos="fade-left" className='font-sf-semibold-rounded text-2xl md:text-4xl'>
            Proyectos
          </h3>
          <p data-aos="fade-bottom" className='text-sm text-gray-400 max-w-80 md:text-lg md:max-w-96'>
            Con la finalidad de mejorar mis habilidades en el desarrollo de aplicaciones móviles, he realizado algunos
            proyectos personales.
          </p>
        </div>
        <img src="mac-bg-1p.png" alt="primer proyecto" className=' ' />
      </div>


      <div className='max-w-4xl w-full p-5 md:pt-56 lg:pt-28'>

        <div className=' text-white flex flex-col items-center'>
          <h3 data-aos="fade-up" className='font-sf-semibold-rounded text-2xl md:text-5xl p-6'>
            Conocimientos
          </h3>
          <p data-aos="fade-up" className='text-sm text-gray-400 text-center max-w-80 md:text-lg md:max-w-96'>
            Con la finalidad de mejorar mis habilidades en el desarrollo de aplicaciones móviles, he realizado
            algunos proyectos personales.
          </p>
        </div>

        <div className=' py-14 flex justify-center'>
          <div className='select-none flex gap-1 hover:gap-2 hover:px-1 hover:duration-300 transition-all justify-center 
          items-center h-30 w-auto bg-neutral-800 rounded-[1rem] border-[0.5px] border-neutral-500 pr-[0.47rem]'>
            <img
              data-aos-duration="800"
              //data-aos="fade-up-right"
              src="./icons/xcode-logo.png" alt="primer proyecto"
              className='object-contain w-[4.7rem] h-[4.7rem] hover:scale-105 duration-150 active:opacity-35 ' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up" 
              src="./icons/ios18-logo.png" alt="primer proyecto"
              className='object-contain w-16 hover:scale-105 duration-150 active:opacity-35' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up-left" 
              src="./icons/swiftui-logo.png" alt="primer proyecto"
              className='object-contain w-20 hover:scale-105 duration-150 active:opacity-35' />
            <img
              data-aos-duration="800"
              //data-aos="fade-up-left" 
              src="./icons/appstore-logo.png" alt="primer proyecto"
              className='object-contain w-[3.55rem] hover:scale-105 duration-150 active:opacity-35' />
          </div>
        </div>

        <div className='lg:max-w-5xl flex flex-col  justify-center items-center pt-28'>
          <h3 className='text-white text-shadow-glow font-sf-semiblack font-bold text-5xl'>
            Mis proyectos
          </h3>

          <div className='flex-wrap pt-20 justify-center gap-5 hidden md:flex'>

            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="0"
              src="/proyects/p6.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="200"
              src="/proyects/p2.png" alt="proyecto 1 reference"
              className='h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="200"
              src="/proyects/p4.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="200"
              src="/proyects/p5.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
          </div>

          <div className='py-5 w-screen md:hidden scroll-smooth'>
            <div className='flex gap-5 p-9 overflow-x-scroll scroll-smooth'>
              <img src="/proyects/p6.png" alt=""
                className='h-[500px] object-contain' />
              <img src="/proyects/p2.png" alt=""
                className='h-[500px] object-contain' />
              <img src="/proyects/p4.png" alt=""
                className='h-[500px] object-contain' />
              <img src="/proyects/p5.png" alt=""
                className='h-[500px] object-contain' />
            </div>

          </div>

        </div>

      </div>


      <div className='w-screen max-w-5xl bg-black flex flex-col md:flex-row items-center justify-center flex-wrap py-20'>
        <Card data={testCard1}>
          <div className=' overflow-hidden'>
            <Image data-aos='fade-right'
              width={350} height={350} src={'/inicio/camaraiphone.jpg'} alt='camaraiphone'
              className=''
            />
          </div>

        </Card>

        <Card data={testCard2}>
          <div className='relative flex flex-col items-center gap-5 pb-14 overflow-hidden'>
            <Image data-aos='fade-right'
              width={350} height={350} src={'/inicio/b-mac-1.jpg'} alt='camaraiphone'
              className='' />
            <Image data-aos='fade-left'
              width={350} height={350} src={'/inicio/b-mac-2.jpg'} alt='camaraiphone'
              className='' />
          </div>
        </Card>
      </div>


      <div className='p-10'>
        <ScrollUpButton />
      </div>

    </>



  );
}
