import React, { ReactNode } from 'react'

export interface LinkData {
    name: string,
    path: string
}

export interface CardModel {
    subtitle?: string
    title: string
    text: string
    link?: LinkData
    dark?: boolean
}

interface Props {
    data: CardModel
    children?: ReactNode
}

export default function Card({ data, children }: Props) {

    const theme = !!data.dark

    return (
        <div className={`${theme == false ? 'bg-white-inicio text-black' :' bg-black text-white'} flex flex-col pt-10 w-full max-w-md `}>
            <div className='flex flex-col items-center gap-3'>

                {
                    data.subtitle ?
                        <span className='font-semibold'>
                            {data.subtitle}
                        </span> : <></>
                }



                <span className='text-4xl font-medium w-[320px] text-center'>
                    {data.title}
                </span>

                <p className=' w-[350px] text-center font-light text-md text-spa'>
                    {data.text}
                </p>

                {
                    data.link ?
                        <a href={data.link.path} className=' text-accent font-light text-sm hover:underline'>
                            {data.link.name}
                        </a> : <></>
                }

            </div>

            {
                children ?
                    <div className='w-full h-full relative pt-10'>
                        {children}
                    </div> : <></>
            }



        </div>
    )
}
