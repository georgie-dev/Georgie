'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { socialLinks } from './data';
import { MdCheck } from 'react-icons/md';
import { IoMdClose } from "react-icons/io";
import { CgSpinnerAlt } from "react-icons/cg";
import axios from 'axios';

interface Input {
    name: string,
    email: string,
    message: string
}

interface Status {
    status:boolean,
    message?:string,
    icon?: React.ReactNode
}

const Contact = () => {

    const [input, setInput] = useState<Input>({
        name: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState<Status>({
        status: false, message: '', icon: ''
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setInput(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            await sendEmail(input);
        } catch (err) {
            console.error('Error sending email:', err);
        }
    }

    const sendEmail = async (value: Input) => {
        const data = {
            service_id: process.env.NEXT_PUBLIC_SERVICE_ID!,
            template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            user_id: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
            template_params: { ...value }
        }

        await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            .then(() => {
                
                setShowModal({ status: true, message: 'Sent', icon: <MdCheck /> });
            })
            .catch(() => {
                
                setShowModal({ status: true, message: 'Error, Try Again', icon: <IoMdClose /> });
            })
            .finally(() => {
                setIsLoading(false)
                setTimeout(()=>{
                    setShowModal({ status: false })
                }, 5000)
            })
    }

    return (
        <div id='contact' className='py-16 px-3 relative md:px-14 lg:px-36 flex md:flex-row flex-col-reverse gap-10 items-center'>
            <div className='w-full md:w-1/2'>
                <form onSubmit={handleSubmit} className='w-full lg:w-4/5 flex flex-col gap-5'>
                    <input
                        type='text'
                        name='name'
                        value={input?.name}
                        onChange={handleChange}
                        placeholder='Your Name'
                        className='w-full border-zinc-800 border-2 py-2 text-black px-4 rounded-sm placeholder:text-zinc-500'
                    />
                    <input
                        type='email'
                        name='email'
                        value={input?.email}
                        onChange={handleChange}
                        placeholder='Email'
                        className='w-full border-zinc-800 border-2 py-2 text-black px-4 rounded-sm placeholder:text-zinc-500'
                    />
                    <textarea
                        name='message'
                        value={input?.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder='How can I help?'
                        className='w-full border-zinc-800 border-2 py-2 text-black px-4 rounded-sm placeholder:text-zinc-500'
                    ></textarea>
                    <div className='w-full flex gap-5 items-start md:items-center justify-between'>
                        <button className='px-4 py-2 rounded-sm w-36 text-base font-semibold text-white hover:text-black flex items-center gap-1 bg-black hover:bg-white border-2 border-black'>
                            {isLoading? 
                            (<span className=' animate-spin'><CgSpinnerAlt/></span>)
                            :
                            'Get in Touch'
                            }
                        </button>
                        <div className=' flex items-center gap-4'>
                            {socialLinks.map((link, index) => (
                                <Link key={index} href={link.link} className='w-12 h-12 flex items-center justify-center bg-white hover:bg-black text-black hover:text-white border-2 border-black rounded-md'>
                                    <link.icon />
                                </Link>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-6 items-start'>
                <div className='flex flex-col gap-4'>
                    <div className='text-black leading-relaxed text-3xl md:text-4xl'>
                        <h1 className='font-extrabold'>Let&apos;s <span className=' text-outline'>talk</span> <br /> for Something special</h1>
                    </div>
                    <div className='text-zinc-500'>Please reach out if you are building and would love to work.</div>
                </div>
                <div className='flex flex-col gap-3 text-black text-xl font-semibold'>
                    <Link href='mailto:mangergeorgewuese@gmail.com'>mangergeorgewuese@gmail.com</Link>
                    <Link href='tel:+2348034335034'>+2348034335034</Link>
                </div>
            </div>      {showModal.status && (
                <div
                    className="absolute bottom-5 right-5 flex items-center gap-1 py-2 px-5 bg-white text-black border-2 border-black shadow-lg 
          animate-fadeInOut"
                >
                    {showModal.icon} {showModal.message}
                </div>
            )}
        </div>
    )
}

export default Contact