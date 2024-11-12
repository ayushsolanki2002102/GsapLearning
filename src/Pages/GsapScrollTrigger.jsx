import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

export default function GsapScrollTrigger() {
    const scrollRef = useRef();

    useGSAP(()=>{
        const boxes = gsap.utils.toArray(scrollRef.current.children);
        boxes.forEach((box) => {
            gsap.to(box,{
                x:150,
                rotation:360,
                borderRadius:'100%',
                scale:1.5,
                scrollTrigger:{
                    trigger: box,
                    start:'bottom, bottom',
                    end:'top 20%',
                    scrub:true,


                },
                ease:'power1.inOut',

            })
        })
    },{scope:scrollRef})

  return (
    <div>
        <h2>GsapScrollTrigger</h2>
        <div className='mt-20 w-full h-screen' ref={scrollRef}>
            <div id='scroll-pink'
            className='scroll-box w-20 h-20 rounded-lg bg-pink-500'
            />
             <div id='scroll-orange'
            className='scroll-box w-20 h-20 rounded-lg bg-orange-500'
            />
        </div>



    </div>

  )
}
