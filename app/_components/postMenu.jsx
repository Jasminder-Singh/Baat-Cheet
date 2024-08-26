"use client"
import {
    UserMinus, CircleUserRound, EyeOff, MessageCircleWarning, Bookmark, ArrowDownToLine
} from 'lucide-react';
import { useEffect } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ["latin"], weight: '400' })

const PostMenu = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        if (menuOpen)
            document.body.style.overflow = 'hidden';

        return () => document.body.style.overflow = 'auto'
    })
    return (
        <div className={` ${poppins.className} fixed bottom-0 w-full ${menuOpen ? 'h-[70%]' : 'h-0'} pb-12 flex flex-col justify-between border-2 bg-white transition-all duration-300 rounded-2xl`}>
            <div className="sticky top-0 flex justify-center items-center border-b ">

                <span className='w-20 h-2 rounded-full bg-slate-300 inline-block m-4 border-2'
                    onClick={() => setMenuOpen(false)}>

                </span>
            </div>
            <div className='h-[20%] flex justify-evenly items-center'>
                <div className=' border-2 rounded-full flex justify-center items-center p-1'>
                    <Bookmark size={50} />
                </div>

                <div className=' border-2 rounded-full flex justify-center items-center p-1'>
                    <ArrowDownToLine size={50} />
                </div>

            </div>
            <div className={`flex flex-col justify-center ${menuOpen ? 'visible' : 'invisible'} select-none h-[50%] px-2 `}>
                <div className='border-y w-full p-2 py-4 flex items-center'>
                    <UserMinus strokeWidth={2} size={28} />
                    <span className='mx-5'>
                        Unfollow
                    </span>
                </div>
                <div className='border-b w-full p-2 py-4 flex items-center'>
                    <CircleUserRound strokeWidth={2} size={28} />
                    <span className='mx-5'>
                        About Account
                    </span>
                </div>
                <div className='border-b w-full p-2 py-4 flex items-center'>
                    <EyeOff strokeWidth={2} size={28} />
                    <span className='mx-5'>
                        Mute
                    </span>
                </div>

                <div className='border-b w-full p-2 py-4 flex items-center text-red-500' >
                    <MessageCircleWarning strokeWidth={2} size={28} />
                    <span className='mx-5'>
                        Report
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PostMenu