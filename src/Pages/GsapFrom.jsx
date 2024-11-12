import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import {Link} from "react-router-dom";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from('#green-box', {
      x: 250,
      repeat:-1,
      yoyo:true,
      rotation:360,
      duration:2,
      ease:'power1.inOut',
    });
  }, []);

  return (
    <>
      <div className="mt-20">
        <h2>Gsap From</h2>
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
        <Link to="/">Back To Main Page</Link>
      </div>
    </>
  );
};

export default GsapFrom;
