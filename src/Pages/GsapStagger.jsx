import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

export default function GsapStagger() {
    useGSAP(()=>{
        gsap.to('.stagger-box',{
            y:250,
            rotation:360,
            borderRadius:"100%",
            repeat:-1,
            yoyo:true,
           //  stagger:0.5,
            stagger : {
                amount:1.5,
                grid:[2,1],
                axis:'y',
                ease:'circ.inOut',
                from:'center',

            }
        })
    },[])
  return (
    <div>
        <h2>GsapStagger</h2>
        <div className='mt-20'>
    <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div> 
    <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div> 
    <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div> 
    <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div> 
    <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div> 
    <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div> 
    <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div>    
    </div>
    </div>

  )
}
