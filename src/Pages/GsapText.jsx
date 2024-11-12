import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

export default function () {
    useGSAP(()=>{
        gsap.to('#text',{
            ease:'power1.inOut',
            opacity:1,
            y:0,

        })
        gsap.fromTo('#para',{
            opacity:0,
            y:20,

        },{
            opacity:1,
            y:0,
            delay:1,
            stagger:0.1,
        })
    },[])
  return (
    <div>
        <h2>Gsap Text</h2>
        <h1 id='text' className='opcacity-0 translate-y-10'>Gsap Text</h1>
        <p id='para'>sdjhgfkjahdsfkufgjsd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore ullam eos, pariatur est sequi neque totam, ratione dolorum animi, nulla necessitatibus fuga non mollitia cum. Voluptatum unde exercitationem velit.</p>
    </div>
  )
}
