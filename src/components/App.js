// import React, { useState } from "react";
import Header from "./Header";
import MultiEleRoute from "./MultiEleRoute";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BioControl from "./BioControl";
import SkillControl from "./SkillControl";
import ProjectControl from "./ProjectControl";
import React from "react";




function App(){
  return (
    <React.Fragment>
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<MultiEleRoute />}/>
        <Route path="/bio-control" element={<BioControl />}/>
        <Route path="/skill-control" element={<SkillControl />}/>
        <Route path="/project-control" element={<ProjectControl />}/>
      </Routes>
    </Router>
    <a href="/">Home</a>
    </React.Fragment> 
  );
}

export default App;