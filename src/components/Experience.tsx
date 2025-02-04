import React from 'react'
import { experience } from './data'

const Experience = () => {
    return (
        <div id='experience' className='py-8 px-3 md:px-14 lg:px-36 bg-black'>
            <header className='text-center text-2xl md:text-4xl text-white font-normal'>My <span className='font-extrabold'>Experience</span></header>
            <div className=' flex flex-col gap-4 p-5'>
                {experience.map((item, index) => (
                    <div key={index} className='w-full border-zinc-500 border-2 bg-black hover:bg-zinc-800 rounded-lg md:p-8 py-5 px-4 flex flex-col gap-5'>
                        <div className=' w-full flex flex-col md:flex-row gap-6 items-start md:items-center justify-between'>
                            <h1 className='text-white font-semibold text-xl'>{item.title}</h1>
                            <small className='text-sm text-zinc-300'>{item.period}</small>
                        </div>
                        <p className='text-sm text-zinc-300'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience