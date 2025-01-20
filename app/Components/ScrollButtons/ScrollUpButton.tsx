import React from 'react'
import Image from 'next/image'

export default function ScrollUpButton() {

    function resetScroll() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }

    return (
        <button onClick={resetScroll}
            className='select-none 
            hover:scale-95 active:scale-50 transition-all'>
            <Image width={25} height={25} src='/symbols/arrow.up.circle.svg' alt='flecha' />
        </button>
    )
}
