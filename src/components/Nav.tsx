'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgSoftwareDownload } from "react-icons/cg";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Nav = () => {

    const [mobileNav, setMobileNav] = useState(false)

    return (
        <div className='fixed z-50 w-full border-b-2 border-black bg-white transition-all'>
            <div className='flex justify-between py-5 px-3 md:px-14 lg:px-36 items-center'>
                <div className='w-fit lg:w-1/4 text-left font-semibold text-lg text-black'>
                    <h1>Georgie.dev</h1>
                </div>
                <div className='hidden md:flex md:w-fit gap-5 lg:w-1/2 justify-between items-center lg:*:text-base md:*:text-xs hover:*:underline hover:*:underline-offset-4 *:font-semibold *:text-black'>
                    <Link href='/#skills'>Skills</Link>
                    <Link href='/#experience'>Experience</Link>
                    <Link href='/#about'>About Me</Link>
                    <Link href='/#projects'>Projects</Link>
                    <Link href='/#contact'>Contact</Link>
                </div>
                <div className='hidden md:flex justify-end w-fit lg:w-1/4'>
                    <Link
                        href='/George_Manger_Resume.pdf'
                        download
                        className='px-4 py-2 rounded-sm md:text-xs lg:text-base font-semibold  text-white hover:text-black flex items-center gap-1 bg-black hover:bg-white border-2 border-black'><span>Résumé</span> <span className='text-lg'><CgSoftwareDownload /></span>
                    </Link>
                </div>
                <div className='md:hidden block relative'>
                    <button className='text-black font-bold text-xl' onClick={() => setMobileNav(!mobileNav)}>
                        {mobileNav ? <IoMdClose /> : <RiMenu3Line />}
                    </button>
                    {mobileNav && (
                        <div className='absolute top-8 w-32 right-0 *:border-2  *:border-black *:p-2 *:w-full *:text-black *: hover:*:text-white *:bg-white hover:*:bg-black flex flex-col gap-0'>
                            <Link onClick={() => setMobileNav(!mobileNav)} href='/#skills'>Skills</Link>
                            <Link onClick={() => setMobileNav(!mobileNav)} href='/#experience'>Experience</Link>
                            <Link onClick={() => setMobileNav(!mobileNav)} href='/#about'>About Me</Link>
                            <Link onClick={() => setMobileNav(!mobileNav)} href='/#projects'>Projects</Link>
                            <Link onClick={() => setMobileNav(!mobileNav)} href='/#contact'>Contact</Link>
                            <Link onClick={() => setMobileNav(!mobileNav)}
                                href='/George_Manger_Resume.pdf'
                                download
                                className='flex items-center gap-1' ><span>Résumé</span> <span className='text-lg'><CgSoftwareDownload /></span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Nav