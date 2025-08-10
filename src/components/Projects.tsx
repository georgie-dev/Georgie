import React from 'react'
import Image from 'next/image'
import { LuExternalLink } from "react-icons/lu";
import { projects } from './data';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
    return (
        <div id='projects' className='py-10 px-3 md:px-14 lg:px-36 bg-black'>
            <header className='text-center text-2xl md:text-4xl text-white font-normal'>My <span className='font-extrabold'>Projects</span></header>
            <div className='flex flex-col gap-y-10 md:gap-y-24 pt-12 mx-auto'>
                {projects.map((project) => (
                    <div key={project.id} className={`w-full flex flex-col gap-10 md:gap-0 items-center justify-between ${project.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className='w-full h-44 md:h-60 rounded-xl'>
                            <Image
                                alt='project'
                                src={project.image}
                                width={700}
                                height={700}
                                className='w-full md:w-11/12 lg:w-4/5 bg-white rounded-2xl h-full object-fit'
                            />
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-col w-full md:w-4/5 gap-5 items-start'>
                                <h1 className='text-2xl md:text-4xl text-white font-bold'>{String(project.id).padStart(2, "0")}</h1>
                                <h1 className='text-xl md:text-3xl text-white font-bold'>{project.name}</h1>
                                <p className='text-zinc-400 text-sm'>{project.description}</p>
                                <div className='flex items-center gap-4'>
                                    {project.stack.map((item, index) => (
                                        <div key={index} className='bg-zinc-200 py-1 px-3 w-fit text-zinc-600 rounded-full text-xs'>{item}</div>
                                    ))}
                                </div>
                                <div className='flex items-center gap-3'>
                                    {project.link && (
                                        <Link href={project.link} target='_blank' className='text-lg text-white'><LuExternalLink /></Link>
                                    )}
                                    {project?.gitHub && (<Link href={project?.gitHub} target='_blank' className='text-lg text-white'><FaGithub /></Link>)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects