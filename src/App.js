import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import Shop from "./routes/shop";
import Intro from "./routes/intro";

export default function(){
  return(
    <Router>
      {/* Place routes here with exact file path */}
      <Routes>
        <Route exact path="/" element={<Intro />}/>
        {/* <Route exact path="/home" element={<Home />}/> */}
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}