import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import IntroCarousel from "./routes/introCarousel";
import SignOn from './routes/SignOn';
import Shop from "./routes/shop";
import Intro from "./routes/intro";
import Home from "./routes/Home";
import Tips_home from "./routes/Tips/Tips_home";

export default function(){
  return(
    <Router>
      {/* Place routes here with exact file path */}
      <Routes>
        <Route exact path="/signOn" element={<SignOn />}/>
        <Route exact path="/" element={<Intro />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/tips" element={<Tips_home />} />
        {/* //<Route exact path="/shop" element={<Shop />} /> */}
      </Routes>
    </Router>
  )
}