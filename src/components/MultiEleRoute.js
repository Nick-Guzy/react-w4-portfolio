import ProjectControl from "./ProjectControl";
import SkillControl from "./SkillControl";
import BioControl from "./BioControl"
import { useState } from "react";

function MultiEleRoute() {
  const [currentlyVisibleState, setCurrentlyVisibleState] = useState("Project")
    return (
      <div>
        <a href="/sign-in">Account Management</a>
        {currentlyVisibleState === "Project" ? <ProjectControl /> : currentlyVisibleState === "Skill" ? <SkillControl /> : currentlyVisibleState === "Bio" ? <BioControl /> : <div></div> }
        <button onClick={ () => setCurrentlyVisibleState("Project")}>See all Projects</button>
        <button onClick={ () => setCurrentlyVisibleState("Skill")}>See all Skills</button>
        <button onClick={ () => setCurrentlyVisibleState("Bio")}>See all Bios</button>
      </div>
    )
  }

  export default MultiEleRoute;