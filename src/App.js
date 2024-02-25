import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import IntroCarousel from "./routes/introCarousel";
import signOn from '../routes/signOn';

export default function(){
  return(
    <Router>
      {/* Place routes here with exact file path */}
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/whatisshustainable" element={<IntroCarousel />}/>
        <Route exact path="/signOn" element={<signOn />}/>
      </Routes>
    </Router>
  )
}