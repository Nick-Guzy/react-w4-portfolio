import React from "react";
import Header from "./Header";
import ProjectControl from "./ProjectControl";
import SkillControl from "./SkillControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MultiEleRoute = () => {
  return (
    <div>
      <ProjectControl />
      <SkillControl />
    </div>
  )
}

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<MultiEleRoute />}/>
      </Routes>
    </Router>
  );
}

export default App;