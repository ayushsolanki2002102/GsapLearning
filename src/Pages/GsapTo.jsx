import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
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
      <h2>GsapTo</h2>
     
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        <Link to="/">Back to Main Page</Link>
      </div>
    </>
  );
};

export default GsapTo;
