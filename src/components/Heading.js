import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function Heading(props) {
    return (
        // <div>
        //     <h1 className='text-2xl md:text-4xl text-center md:mb-4 mt-4'>{props.text}</h1>
        // </div>
        <div className='flex justify-center items-center mt-4 mb-6'>
            <Fade direction="down" delay="1" triggerOnce>
                <div className='relative group'>
                    <div className='heading tracking-wide leading-[3rem] px-1 py-2 uppercase'>{props.text}</div>

                    <div className='absolute hidden lg:block group-hover:h-full transition-all heading-background  bg-gradient-to-r from-[#FCF6F5FF] to-[#990011FF] duration-700 -z-[1] bottom-0 h-2 w-full rounded-md'></div>
                </div>
            </Fade>
        </div>
    )
}
