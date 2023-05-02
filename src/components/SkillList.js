import React from "react";
import Skill from "./Skill";
import PropTypes from "prop-types";

function SkillList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.skillList.map((skill) =>
        <Skill 
          whenSkillClicked={props.onSkillSelection}
          title={skill.title}
          description={skill.description}
          yearsofexperience={skill.yearsofexperience}
          id={skill.id}
          key={skill.id}/>
      )}
    </React.Fragment>
  );
}

SkillList.propTypes = {
  skillList: PropTypes.array,
  onSkillSelection: PropTypes.func
};

export default SkillList;

