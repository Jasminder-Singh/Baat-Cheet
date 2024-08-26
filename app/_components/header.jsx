import { Lora } from 'next/font/google';

import { MessageCircleMore, Star } from 'lucide-react'
const font = Lora({ subset: ['latin'], weight: '500', preload: false });

const Header = () => {
    return (
        <div className='border-b border-black p-4 flex justify-between items-center'>
            <span className={`${font.className} text-2xl`}>
                Baat Cheet
            </span>
            <div className='flex justify-evenly items-center'>
                <Star className='mx-4 h-7 w-7'/>
                <MessageCircleMore className='mx-4 h-7 w-7'/>
            </div>
        </div>
    )
}

export default Header;