import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const date = new Date ()
    return (
        <div className='py-8 px-3 md:px-14 lg:px-36 bg-black flex items-center justify-between'>
            <div className='text-left font-semibold text-lg text-white'>
                <h1>Georgie.dev</h1>
            </div>
            <div className='flex flex-col text-lg font-semibold gap-0 items-end'>
                <small>&copy; <span>{date.getFullYear()}</span></small>
                <small>Design by <Link href='https://www.figma.com/@jhanvishah' className='text-zinc-200 underline underline-offset-4'>Jhanvi Shah</Link></small>
            </div>
        </div>
    )
}

export default Footer