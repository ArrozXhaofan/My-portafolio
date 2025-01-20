"use client"

import { useEffect } from 'react';
import Image from 'next/image';

import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollDownButton from './Components/ScrollButtons/ScrollDownButton';
import ScrollUpButton from './Components/ScrollButtons/ScrollUpButton';


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Ajusta la duración si es necesario
    });
  }, []);

  const msDurationPrimary = 300
  const animationFirst = "zoom in"

  return (

    <>
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


      <div className='max-w-5xl w-full p-5 md:pt-56 lg:pt-28'>

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
              src="./proyects/p1.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="200"
              src="./proyects/p2.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="400"
              src="./proyects/p3.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="200"
              src="./proyects/p4.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
            <img data-aos="fade-up" data-aos-duration="500" data-aos-delay="0"
              src="./proyects/p5.png" alt="proyecto 1 reference"
              className=' rounded-[1.5rem] border-[0.5px] border-neutral-600 h-[350px]' />
          </div>

          <div className='py-5 w-screen md:hidden scroll-smooth'>
            <div className='flex gap-5 p-9 overflow-x-scroll scroll-smooth'>
              <img src="./proyects/p4.png" alt=""
                className='h-[600] bject-contain rounded-[2.5rem] border-[0.5px] border-neutral-600' />
              <img src="./proyects/p3.png" alt=""
                className='h-[600] bject-contain rounded-[2.5rem] border-[0.5px] border-neutral-600' />
              <img src="./proyects/p2.png" alt=""
                className='h-[600] bject-contain rounded-[2.5rem] border-[0.5px] border-neutral-600' />
              <img src="./proyects/p5.png" alt=""
                className='h-[600] bject-contain rounded-[2.5rem] border-[0.5px] border-neutral-600' />
              <img src="./proyects/p1.png" alt=""
                className='h-[600] bject-contain rounded-[2.5rem] border-[0.5px] border-neutral-600' />
            </div>

          </div>

        </div>

      </div>

      <div className='lg:max-w-5xl w-full  py-16 px-3 md:max-w-2xl flex flex-col gap-16 lg:gap-4 lg:flex-row '>

        <div className=''>
          <h4 className='text-white font-bold text-4xl pb-10'>
            Apple Libreries
          </h4>
          <div className='flex flex-col gap-5 px-2'>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/mapkit.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>MapKit</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Expericencia en la creacion de mapas dinamicos jugando entre los diferentes estilos que
                  ofrece la libreria y opciones de marquedo y camaras de la vista.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/corelocation.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Core Location</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Dede capturar la informacion actual del usuario, hasta rastreo administracion gps
                  en tiempo real, son muchas las formas de combinar CoreLocation y MapKit.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/avkit.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>AVKit</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Capacidad para mostrar contenido multimedia, a manipulacion del usuario.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/swiftdata.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Swift Data</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Amplia experiencia en la creacion de base de datos locales con Swift Data,
                  la nueva libreria de persistencia de Apple, desde grandes cantidades de datos hasta pequeños CRUDs
                  a eleccion del cliente.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/charts.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Charts</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Capacidad para crear graficos simples o personalizados de datos.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <Image width={48} height={48} src="/icons/localauth.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Local Authentication</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className=''>
          <h4 className='text-white font-bold text-4xl pb-10'>
            Otras tecnologias
          </h4>
          <div className='flex flex-col gap-5 px-2'>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/firebase.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Firebase SDK para iOS</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Expericencia en la creacion de mapas dinamicos jugando entre los diferentes estilos que
                  ofrece la libreria y opciones de marquedo y camaras de la vista.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/ty.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12 rounded-lg' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Typescript</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Dede capturar la informacion actual del usuario, hasta rastreo administracion gps
                  en tiempo real, son muchas las formas de combinar CoreLocation y MapKit.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/nextjs.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>NextJs</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Capacidad para mostrar contenido multimedia, a manipulacion del usuario.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/tailwind.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Tailwind CSS</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Amplia experiencia en la creacion de base de datos locales con Swift Data,
                  la nueva libreria de persistencia de Apple, desde grandes cantidades de datos hasta pequeños CRUDs
                  a eleccion del cliente.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 '>
              <Image width={48} height={48} src="/icons/figma.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className='w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Figma</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Capacidad para crear graficos simples o personalizados de datos. ffd sfdfs fsdf  sfdfsfs
                  fsfdsfds
                </p>
              </div>
            </div>

            <div className='flex items-start justify-start gap-4'>
              <Image width={48} height={48} src="/icons/github.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className=' w-12' />
              <div className='flex flex-col gap-2 text-white'>
                <span className=' font-sf-regular-rounded text-2xl'>Git & GitHub</span>
                <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                  Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='lg:max-w-4xl w-full  py-16 px-3 md:max-w-2xl flex flex-col gap-16 lg:gap-4 lg:flex-row '>
        <div className='flex flex-col w-full justify-center items-center gap-10'>
          <h4 className='text-white font-bold text-4xl pb-10'>
            Experiencia tecnica
          </h4>

          <div className='flex flex-col md:flex-row gap-14 flex-wrap items-center justify-center'>

            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
              <Image width={30} height={30} src="/symbols/shippingbox.svg" alt="icon skill"
                data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className='pb-3' />
              <span className=' font-sf-regular-rounded text-md'>SDK & Packets Manager</span>
              <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
              <Image width={30} height={30} src="/symbols/app.connected.to.app.below.fill.svg" alt="icon skill"
                data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className='pb-3' />
              <span className=' font-sf-regular-rounded text-md'> Arquitectura Clean clode & MVVM</span>
              <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
              <Image width={30} height={30} src="/symbols/network.svg" alt="icon skill"
                data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className='pb-3' />
              <span className=' font-sf-regular-rounded text-md'>API request</span>
              <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
              <Image width={30} height={30} src="/symbols/testtube.2.svg" alt="icon skill"
                data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className='pb-3' />
              <span className=' font-sf-regular-rounded text-md'>Testing Unit, Integration, UI</span>
              <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
              <Image width={30} height={30} src="/symbols/square.3.layers.3d.down.backward.svg" alt="icon skill"
                data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className='pb-3' />
              <span className=' font-sf-regular-rounded text-md'>Desarrollo de vistas</span>
              <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
              <Image width={50} height={50} src="/symbols/person.3.sequence.svg" alt="icon skill"
                data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                className='pb-3' />
              <span className=' font-sf-regular-rounded text-md'>Planteaniemto de soluciones</span>
              <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                Experiencia en implementacion de accesos con datos biometricos del usuario como FaceID o TouchID.
              </p>
            </div>

          </div>



        </div>
      </div>

      <div className='p-10'>
        <ScrollUpButton/>
      </div>
    </>

      

  );
}
