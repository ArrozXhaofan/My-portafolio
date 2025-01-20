import React from 'react'
import Image from 'next/image';

interface props {
    scroll: number
}

export default function ScrollDownButton({scroll}: props) {

    function smallScrollDown() {
        window.scrollBy({ top: scroll, left: 0, behavior: 'smooth' });
    }

    return (
        <button
            onClick={smallScrollDown}
            className="select-none bottom-24 md:bottom-5 absolute hover:scale-95 active:scale-50 transition-all"
        >
            <Image
                width={25}
                height={25}
                src="/symbols/arrow.down.circle.svg"
                alt="flecha"
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-delay="2500"
                data-aos-offset="0"
            />
        </button>
    )
}
