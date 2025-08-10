import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='py-10 px-3 md:px-14 lg:px-36'>
            <div className='w-full flex md:flex-row flex-col gap-16 items-center'>
                <div className='w-full md:w-1/2'>
                    <Image
                        alt='George'
                        src='/about_me.png'
                        width={700}
                        height={700}
                        className='w-full lg:w-2/3 h-full'
                        priority
                    // objectFit='cover'
                    />
                </div>
                <div className=' w-full md:w-1/2 flex flex-col gap-6 items-start'>
                    <header className='text-left text-2xl md:text-4xl text-black font-normal'>About <span className='font-extrabold'>Me</span></header>
                    <div className=' flex flex-col gap-3 text-zinc-500'>
                        <p>In 2019, I embarked on my development journey armed with a laptop, curiosity, and love for the internet. Starting as a self-taught developer, I built my foundation through hands-on projects and countless debugging sessions, which only grew stronger when I pursued my Software Engineering degree.</p>

                        <p>My evolution in the tech has been continuous growth, from mastering vanilla JavaScript (once my biggest challenge) to architecting sophisticated applications with React, TypeScript and Python. Now, as a Software Engineer, I focus on building solutions that make a difference. Leading and being in great teams has taught me that great software emerges from the perfect balance of technical excellence and human-centered design.</p>

                        <p>Outside the world of development, you&apos;ll find me on the basketball court or on Twitter.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About