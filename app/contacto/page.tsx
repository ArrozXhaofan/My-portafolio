
import React from 'react';

export default function Contacto() {
    return (
        <div className='h-screen max-h-screen w-screen bg-black flex justify-center items-center'>


            <div className=" w-[38vh] h-[80vh]
            rounded-[2.8rem]
            bg-[url('/mac-fondo.png')] bg-cover bg-center ">

                <div className='relative w-full h-full flex justify-center'>

                    <div className='flex justify-center absolute bottom-1'>

                        <div className='select-none flex gap-1 hover:gap-2 hover:px-1 hover:duration-300 transition-all 
                        justify-center items-center h-[3.2rem] p-1.5 w-auto bg-neutral-800 rounded-[1rem] border-[0.5px]
                         border-neutral-500 pr-[0.47rem]'>

                            <a href='/'>
                                <img
                                    src="./icons/home.png" alt="primer proyecto"
                                    className='object-contain h-[2.65rem] hover:scale-105 duration-75 active:opacity-35' />
                            </a>


                            <a href="https://www.linkedin.com/in/jeanpiere-laura-lobreguez-815318185/" target='_blank'>
                                <img
                                    src="./icons/linkedln.png" alt="primer proyecto"
                                    className='object-contain h-[2.4rem] hover:scale-105 duration-75 active:opacity-35' />
                            </a>

                            <a href="tel:+51946272030" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="./icons/phone.png" alt="primer proyecto"
                                    className='object-contain h-[2.35rem] hover:scale-105 duration-75 active:opacity-35' />
                            </a>

                            <a href="mailto:jean.ganador12@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="./icons/email.png" alt="primer proyecto"
                                    className='object-contain h-[2.6rem] hover:scale-105 duration-75 active:opacity-35' />
                            </a>

                            <a href="./files/cv_jeanLaura.pdf" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="./icons/cv.png" alt="primer proyecto"
                                    className='object-contain h-[2.3rem] hover:scale-105 duration-75 active:opacity-35' />
                            </a>

                            <a href="https://github.com/ArrozXhaofan" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="./icons/github.png" alt="primer proyecto"
                                    className='object-contain h-[2.3rem] hover:scale-105 duration-75 active:opacity-35' />
                            </a>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};
