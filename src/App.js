import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import GsapTo from "./Pages/GsapTo";
import GsapFrom from "./Pages/GsapFrom";
import GsapFromTo from "./Pages/GsapFromTo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<Main />} />

        {/* Individual component routes */}
        <Route path="/gsap-to" element={<GsapTo />} />
        <Route path="/gsap-from" element={<GsapFrom />} />
        <Route path="/gsap-from-to" element={<GsapFromTo />} />
      </Routes>
    </Router>
  );
}

export default App;
