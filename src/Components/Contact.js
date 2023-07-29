import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
export default function Contact({ lang }) {
    return (
        <div>
            <div id='tab-4' className='w-full h-screen flex justify-center items-center text-center bg-bgligth'>
                <div>
                    <div className='font-lato text-4xl sm:text-5xl  md:text-6xl text-header1 tracking-widest'><h2>{lang ? 'Lets Connect' : 'ارتباط با من'}</h2></div>



                    <div className='relative bg-white shadow-xl p-10 max-w-xl mt-20 rounded-lg flex flex-col justify-center items-center'>
                        <img className='w-20 h-20 rounded-full absolute -top-10  bg-gray-400 ring-4 ring-mainblue animate-bounce' src="/images/contactme.png" />
                        <h4 className='text-2xl tracking-widest mt-10'>{lang ? 'mohammad reza' : 'محمدرضا'}</h4>
                        <p>{lang ? 'Thanks for visiting! Send a connection request on LinkedIn or lets connect over a quick Zoom!' : 'با تشکر از این که از سایت من دیدن کردید برای ارتباط با من میتوانید از طریق لینک های زیر ارتباط برقرار کنید'}</p>

                        <div className='mt-10 md:flex-row md:justify-center md:gap-32 flex flex-col gap-5 items-center'>
                            <a className=' group text-center bg-mainblue text-white overflow-hidden rounded-md font-bold' href="https://github.com/spdfalcon">
                                <div className='flex items-center relative '>
                                    <div className='text-5xl z-30'>
                                        <AiFillGithub></AiFillGithub>
                                    </div>
                                    <div className='px-5 z-30'>
                                        <span>Connect on Github</span>
                                    </div>
                                    <span className='w-14 h-full bg-gray-400 absolute left-0 '></span>
                                    <span className='duration-500  w-14 h-full group-hover:w-full bg-gray-400/60 absolute left-0 '></span>
                                </div>
                            </a>
                            <a className=' group text-center bg-mainblue text-white overflow-hidden rounded-md font-bold' href="https://www.instagram.com/spd.mohammadreza/">
                                <div className='flex items-center relative'>
                                    <div className='text-5xl z-30'>
                                        <AiOutlineInstagram></AiOutlineInstagram>
                                    </div>
                                    <div className='px-5 z-30'>
                                        <span>Connect on Instagram</span>
                                    </div>
                                    <span className='w-14 h-full bg-red-400 absolute left-0 '></span>
                                    <span className='duration-500  w-14 h-full group-hover:w-full bg-red-400/60 absolute left-0 '></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
