import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link to="/gsap-to">GsapTo</Link>
        </li>
        <li>
          <Link to="/gsap-from">GsapFrom</Link>
        </li>
        <li>
          <Link to="/gsap-from-to">GsapFromTo</Link>
        </li>
      </ul>
    </div>
  );
}
