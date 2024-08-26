"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';

import '../../public/stories.css';


const Stories = () => {
    const stories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19];
    const story = useRef();
    const scroll = useRef();
    const [step, setStep] = useState(0);

    const rightScroll = () => {

        if (scroll.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scroll.current;


            if (scrollLeft + clientWidth >= scrollWidth) {
                return;
            } else {
                setStep(prev => (
                    prev - story.current.clientWidth
                ))
            }
        }

    }
    const leftScroll = () => {

        if (scroll.current) {
            if (step == 0) {
                return;
            }
            setStep(prev => (
                prev + story.current.clientWidth
            ))

        }

    }

    return (

        <div className="relative">
            <div ref={scroll} className="relative h-40 overflow-scroll flex justify-center items-center scroll-smooth border-b-2">
                {
                    stories.map((num, index) => {
                        return <div key={num} ref={story}
                            className={`absolute border-2 border-black flex justify-center items-center h-20 w-20 rounded-full
                             ${num === 0 ? 'border-dashed text-2xl border-gray-500' : null}`}
                            style={{
                                left: `${index * 95}px`,
                                transform: `translateX(${step}px)`
                            }}>
                            {
                                num === 0
                                    ? <span className="absolute right-0 bottom-[-8px] w-8 h-8 bg-blue-500 text-white flex justify-center items-center rounded-full">
                                        +
                                    </span>
                                    : num
                            }
                        </div>
                    })
                }

            </div>
            <button onClick={leftScroll} className="absolute left-0 top-0 bottom-0  bg-white w-9 h-9  rounded-full shadow-md cursor-pointer m-auto border border-black flex justify-center items-center">
                <ChevronLeft className="text-purple-700" />
            </button>
            <button onClick={rightScroll} className="absolute right-0 top-0 bottom-0 bg-white w-9 h-9  rounded-full shadow-md cursor-pointer m-auto border border-black flex justify-center items-center">

                <ChevronRight className="text-purple-700" />

            </button>
        </div>
    )
}

export default Stories