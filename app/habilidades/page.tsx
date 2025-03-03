"use client"

import { useEffect } from "react"

import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigatore, { SubNavConfiguration } from "../Components/Nav/Nav"
import ScrollUpButton from "../Components/ScrollButtons/ScrollUpButton"

export default function Habilidades() {

    useEffect(() => {
        AOS.init({
            duration: 3000, // Ajusta la duración si es necesario
        });
    }, []);

    const msDurationPrimary = 300
    const animationFirst = "zoom in"

    const navSetting: SubNavConfiguration = {
        title: 'Habilidades',
        items: [
            'Main skills',
            'Experiencia tecnica'
        ]
    }

    return (

        <>
            <Navigatore setting={navSetting} />

            <div className=" w-full h-full flex flex-col justify-center items-center pt-14 lg:pt-7">

                <div id="Main skills"
                    className='lg:max-w-5xl w-full  py-16 px-3 md:max-w-2xl flex flex-col gap-16 lg:gap-4 lg:flex-row '>

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
                                        Con alta experiencia usando el SDK, en la crecion de diferente contenido como FirebaseAuth,
                                        FirebaseAnalytics y Firestore Database, he sido capaz de conjugar estas tecnologias.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4 '>
                                <Image width={48} height={48} src="/icons/ty.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className=' w-12 rounded-lg' />
                                <div className='flex flex-col gap-2 text-white'>
                                    <span className=' font-sf-regular-rounded text-2xl'>Typescript</span>
                                    <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                                        Experiencia en la creacion de webs con TypesScript para mayor seguridad en el tipado de datos y
                                        buenas practicas para un codigo legible y escalable con los años.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4 '>
                                <Image width={48} height={48} src="/icons/nextjs.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className=' w-12' />
                                <div className='flex flex-col gap-2 text-white'>
                                    <span className=' font-sf-regular-rounded text-2xl'>NextJs</span>
                                    <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                                        Mucha experiencia en creando paginas web dinamicas y con alto SEO para paginas y aplicaciones web
                                        , cuento con la capacidad para usar esta libreria de React para produccion.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4 '>
                                <Image width={48} height={48} src="/icons/tailwind.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className=' w-12' />
                                <div className='flex flex-col gap-2 text-white'>
                                    <span className=' font-sf-regular-rounded text-2xl'>Tailwind CSS</span>
                                    <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                                        Amplia experiencia en el uso de Tailwind para los estilos de las paginas web combinando
                                        tecnologias asyncronas y dinamicas con este, juntandolas con CSS puro para crear
                                        una pagina esteticamente buena para el usuario.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4 '>
                                <Image width={48} height={48} src="/icons/figma.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className='w-12' />
                                <div className='flex flex-col gap-2 text-white'>
                                    <span className=' font-sf-regular-rounded text-2xl'>Figma</span>
                                    <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                                        Capaz de crear diseños UI/UX no tan complejos para representar mis ideas y apoyar al equipo de diseño.
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start justify-start gap-4'>
                                <Image width={48} height={48} src="/icons/github.png" alt="icon skill" data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className=' w-12' />
                                <div className='flex flex-col gap-2 text-white'>
                                    <span className=' font-sf-regular-rounded text-2xl'>Git & GitHub</span>
                                    <p className='font-sf-regular-rounded text-sm text-neutral-400'>
                                        Con experiencia para trabajar con diferentes equipos la herramienta de control de versiones
                                        mas popular y mas usada por los desarrolladores.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div id="Experiencia tecnica"
                    className='lg:max-w-4xl w-full  py-16 px-3 md:max-w-2xl flex flex-col gap-16 lg:gap-4 lg:flex-row '>
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
                                    Implementacion de SDK para el uso de tecnologias externas y simplificacion de funciones.
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
                                <Image width={30} height={30} src="/symbols/app.connected.to.app.below.fill.svg" alt="icon skill"
                                    data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className='pb-3' />
                                <span className=' font-sf-regular-rounded text-md'> Arquitectura Clean clode & MVVM</span>
                                <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                                    Para programas medianos a grandes que con el tiempo sean escalables y de facil mantenimiento.
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
                                <Image width={30} height={30} src="/symbols/network.svg" alt="icon skill"
                                    data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className='pb-3' />
                                <span className=' font-sf-regular-rounded text-md'>API request</span>
                                <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                                    Alta experiencia en el consumo de APIs, y la organizacion de datos por capaz y vista del usuario.
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
                                <Image width={30} height={30} src="/symbols/testtube.2.svg" alt="icon skill"
                                    data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className='pb-3' />
                                <span className=' font-sf-regular-rounded text-md'>Testing Unit, Integration, UI</span>
                                <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                                    Capaz de crear algunos testings para mantener un codigo limpio.
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
                                <Image width={30} height={30} src="/symbols/square.3.layers.3d.down.backward.svg" alt="icon skill"
                                    data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className='pb-3' />
                                <span className=' font-sf-regular-rounded text-md'>Desarrollo de vistas</span>
                                <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                                    Alta experiencia en la creacion de vistas tanto en aplicaciones moviles y webs.
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
                                <Image width={50} height={50} src="/symbols/person.3.sequence.svg" alt="icon skill"
                                    data-aos={animationFirst} data-aos-duration={msDurationPrimary}
                                    className='pb-3' />
                                <span className=' font-sf-regular-rounded text-md'>Planteaniemto de soluciones</span>
                                <p className='font-sf-thin text-sm text-neutral-400 w-72 '>
                                    Experiencia trabajando con equipos de diferentes nacionalidades y de manera eficaz.
                                </p>
                            </div>

                        </div>



                    </div>
                </div>

            </div>

            <div className="p-7">
                <ScrollUpButton />

            </div>
        </>



    )
}