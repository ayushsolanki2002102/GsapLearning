import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo('#red-box', {
        x:0,
        rotaion:0,
        borderRadius:"0%",

    }
    ,
    {
      x: 250,
      repeat:-1,
      yoyo:true,
      borderRadius:"100%",
      rotation:360,
      duration:2,
      ease:'bounce.out',
    });
  }, []);

  return (
    <>
      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </>
  );
};

export default GsapFromTo;
