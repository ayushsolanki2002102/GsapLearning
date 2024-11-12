import { useGSAP } from '@gsap/react';
import React from 'react'
import {Link} from 'react-router-dom'
import {gsap} from "gsap";


export default function GsapTimeLine() {
    const timeline = gsap.timeline({
        repeat:-1,
        repeatDelay:1,
        yoyo:true,

    });

    useGSAP(() => {
        timeline.to("#yellow-box",{
            x:250,
            rotation:360,
            borderRadius:'100%',
            duration:2,
            ease:'back.inOut',

        })

        timeline.to('#yellow-box',{
            y:250,
            scale:2,
            rotation:360,
            borderRadius:'100%',
            duration:2,
            ease:'back.inOut'
        })

        timeline.to('#yellow-box',{
            x:500,
            scale:1,
            rotation:360,
            borderRadius:8,
            duration:2,
            ease:"back.inOut",
        })
    },[]);
  
  return (
    <div>
        <h2>Gsap Time Line</h2>
        <button onClick={()=>{
            if(timeline.paused())
            {
                timeline.play();
            }
            else
            {
                timeline.pause();
            }
        }}>Play/Pause</button>
        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
        <Link to="/">Back to Main Page</Link>


    </div>

  )
}
