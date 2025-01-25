import React from 'react'
import Image from 'next/image'
import { LinkData } from '../Card'


export interface MiniCardModel {
    imgUrl: string,
    initText?: string,
    text: string,
    endText?: string
    link?: LinkData
}

interface Props {
    data: MiniCardModel
}

export default function MiniCard({ data }: Props) {
    return (
        <div className='text-sf-gray p-3 flex flex-col gap-4 overflow-hidden'>
            <div className='h-[35px]'>
            <Image width={25} height={25} src={data.imgUrl} alt='icon'
                className=' text-emerald-400 fill-current'/>
            </div>
            
            <p className='w-[170px] text-sm font-medium'>
                <span className='text-white'>{data.initText}</span>
                {data.text}
                <span className='text-white'>{data.endText}</span>
            </p>

            {
                data.link ?
                    <a href={data.link.path} target='_blank'
                        className='text-accent w-[170px] text-xs font-sf-regular-rounded-regular
                             leading-5 flex items-center gap-1 hover:underline'>
                        {data.link.name}
                        <Image width={5} height={5} src='/symbols/chevron.right.accent.svg' alt='chevron'
                            className=''
                        />
                    </a>

                    : <></>
            }

        </div>
    )
}
