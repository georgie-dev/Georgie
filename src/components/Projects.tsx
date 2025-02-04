import React from 'react'
import Image from 'next/image'
import { LuExternalLink } from "react-icons/lu";
import Link from 'next/link';

const Projects = () => {
    return (
        <div id='projects' className='py-10 px-3 md:px-14 lg:px-36 bg-black'>
            <header className='text-center text-2xl md:text-4xl text-white font-normal'>My <span className='font-extrabold'>Projects</span></header>
            <div className='flex flex-col gap-y-10 md:gap-y-24 pt-12 mx-auto'>
                <div className='w-full flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between'>
                    <div className='w-full h-80 rounded-xl'>
                        <Image
                            alt='project'
                            src='/'
                            width={700}
                            height={700}
                            className='w-full md:w-11/12 lg:w-4/5 bg-gray-400 rounded-2xl h-full'
                        />
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-col w-full md:w-4/5 gap-6 items-start'>
                            <h1 className='text-2xl md:text-4xl text-white font-bold'>01</h1>
                            <h1 className='text-xl md:text-3xl text-white font-bold'>Crypto Screener Application</h1>
                            <p className='text-zinc-500 text-sm'>Quis nostrud ipsum sit velit qui anim occaecat elit esse pariatur cillum. Consectetur dolor sunt est dolor amet est. Sunt cillum ullamco exercitation cillum quis laborum consectetur.</p>
                            <Link href='/' className='text-lg text-white'><LuExternalLink /></Link>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col-reverse md:flex-row gap-10 md:gap-0 items-center justify-between'>
                    <div className='w-full'>
                        <div className='flex flex-col w-full md:w-4/5 gap-6 items-start'>
                            <h1 className='text-2xl md:text-4xl text-white font-bold'>01</h1>
                            <h1 className='text-xl md:text-3xl text-white font-bold'>Crypto Screener Application</h1>
                            <p className='text-zinc-500 text-sm'>Quis nostrud ipsum sit velit qui anim occaecat elit esse pariatur cillum. Consectetur dolor sunt est dolor amet est. Sunt cillum ullamco exercitation cillum quis laborum consectetur.</p>
                            <Link href='/' className='text-lg text-white'><LuExternalLink /></Link>
                        </div>
                    </div>
                    <div className='w-full h-80 rounded-xl'>
                        <Image
                            alt='project'
                            src='/'
                            width={700}
                            height={700}
                            className='w-full md:w-11/12 lg:w-4/5 bg-gray-400 rounded-2xl h-full'
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between'>
                    <div className='w-full h-80 rounded-xl'>
                        <Image
                            alt='project'
                            src='/'
                            width={700}
                            height={700}
                            className='w-full md:w-11/12 lg:w-4/5 bg-gray-400 rounded-2xl h-full'
                        />
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-col w-full md:w-4/5 gap-6 items-start'>
                            <h1 className='text-2xl md:text-4xl text-white font-bold'>01</h1>
                            <h1 className='text-xl md:text-3xl text-white font-bold'>Crypto Screener Application</h1>
                            <p className='text-zinc-500 text-sm'>Quis nostrud ipsum sit velit qui anim occaecat elit esse pariatur cillum. Consectetur dolor sunt est dolor amet est. Sunt cillum ullamco exercitation cillum quis laborum consectetur.</p>
                            <Link href='/' className='text-lg text-white'><LuExternalLink /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects