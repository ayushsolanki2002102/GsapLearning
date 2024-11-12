import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Main Page</h1>
        <ul className="space-y-4">
          <li>
            <Link
              to="/gsap-to"
              className="block w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              GsapTo
            </Link>
          </li>
          <li>
            <Link
              to="/gsap-from"
              className="block w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              GsapFrom
            </Link>
          </li>
          <li>
            <Link
              to="/gsap-from-to"
              className="block w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
            >
              GsapFromTo
            </Link>
          </li>
          <li>
            <Link
              to="/gsap-time-line"
              className="block w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
            >
              GsapTimeLine
            </Link>
          </li>
          <li>
            <Link
              to="/gsap-stagger"
              className="block w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
            >
              GsapStagger
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
