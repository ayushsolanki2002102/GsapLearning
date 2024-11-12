import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GsapTo = () => {
  useEffect(() => {
    gsap.to('#blue-box', {
      x: 400,
      repeat:-1,
      yoyo:true,
      rotation:360,
      duration:2,
      ease:'bounce.out',
    });
  }, []);

  return (
    <>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </>
  );
};

export default GsapTo;
