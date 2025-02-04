import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { socialLinks } from './data';

const Hero = () => {
    return (
        <div className='py-8 px-3 md:px-14 lg:px-36'>
            <div className='w-full flex mt-24 md:flex-row flex-col-reverse gap-10 items-center'>
                <div className=' w-full md:w-1/2 flex flex-col gap-10 items-start'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-black lg:leading-relaxed text-2xl md:text-3xl lg:text-[45px]'>
                            <h1>Hello I&apos;m <span className='font-extrabold'>George Manger.</span></h1>
                            <h1 className='font-extrabold'>Software <span className=' text-outline'>Engineer</span></h1>
                            <h1> Based In <span className='font-extrabold'>Nigeria.</span></h1>
                        </div>
                        <div className='text-zinc-500'>I specialize in crafting clean, efficient, and scalable software solutions that solve real-world problems. With an expertise in front-end engineering and a good foundation in back-end engineering, I bring ideas to life through innovative design and robust engineering. Let’s collaborate and build something extraordinary.</div>
                    </div>
                    <div className=' flex items-center gap-4'>
                        {socialLinks.map((link, index) => (
                            <button key={index} className='w-12 h-12 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white border-2 border-black rounded-md'><Link href={link.link}><link.icon /></Link></button>
                        ))}
                    </div>
                </div>
                <div className='hidden lg:block w-1/2'>
                    <Image
                        alt='George'
                        src='/Hero.png'
                        width={900}
                        height={900}
                        className='w-full h-full'
                        priority
                    // objectFit='cover'
                    />
                </div>
                <div className='block lg:hidden w-full md:w-1/2'>
                    <Image
                        alt='George'
                        src='/Hero-mobile.png'
                        width={1500}
                        height={1500}
                        className='w-full h-full'
                        priority
                    // objectFit='cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero