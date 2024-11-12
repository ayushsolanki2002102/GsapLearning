import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import GsapTo from "./Pages/GsapTo";
import GsapFrom from "./Pages/GsapFrom";
import GsapFromTo from "./Pages/GsapFromTo";
import GsapTimeLine from "./Pages/GsapTimeLine";
import GsapStagger from "./Pages/GsapStagger";
import GsapScrollTrigger from "./Pages/GsapScrollTrigger";

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
        <Route path="/gsap-time-line" element={<GsapTimeLine/>}/>
        <Route path="/gsap-stagger" element={<GsapStagger/>}/>
        <Route path="/gsap-scroll-trigger" element={<GsapScrollTrigger/>}/>

      </Routes>
    </Router>
  );
}

export default App;
