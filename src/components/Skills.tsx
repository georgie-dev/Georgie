import React from 'react'
import { FaReact, FaPython, FaAws, FaVuejs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsLine, RiFirebaseLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoDjango } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

const Skills = () => {
    const skills = [
        {
            icon: <IoLogoJavascript />,
            name:'Javascript'
        },
        {
            icon: <BiLogoTypescript />,
            name:'Typescript'
        },
        {
            icon: <FaReact />,
            name:'React.js'
        },
        {
            icon: <RiNextjsLine />,
            name:'Next.js'
        },
        {
            icon: <FaVuejs />,
            name:'Vue.js'
        },
        {
            icon: <FaPython />,
            name:'Python'
        },
        {
            icon: <BiLogoDjango />,
            name:'Django'
        },
        {
            icon: <SiMysql />,
            name:'MySQL'
        },
        {
            icon: <RiFirebaseLine />,
            name:'FireBase'
        },
        {
            icon: <FaGitAlt />,
            name:'Git'
        },
        {
            icon: <FaAws />,
            name:'AWS'
        },
    ]
    return (
        <div id='skills' className='py-8 px-3 md:px-14 lg:px-36'>
            <header className='text-center text-4xl text-black font-normal'>My <span className='font-extrabold'>Skills</span></header>
            <div className=' grid grid-cols-4 md:grid-cols-3 mx-auto lg:grid-cols-6 gap-2 md:gap-4 py-5'>
                {skills.map((skill, index) => (
                    <div key={index} className='w-full flex-none p-2 h-20 md:h-44 flex flex-col gap-4 items-center justify-center bg-white hover:bg-black text-black hover:text-white border-2 border-black rounded-md'>
                        <div className='text-sm md:text-4xl'>{skill.icon}</div>
                        <h2 className='text-xs md:text-base'>{skill.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills