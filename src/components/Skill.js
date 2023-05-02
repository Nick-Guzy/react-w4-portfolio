import React from "react";
import PropTypes from "prop-types";

function Skill(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenSkillClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>{props.yearsOfExperience}</p>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Skill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  yearsOfExperience: PropTypes.string,
  id: PropTypes.string,
  whenSkillClicked: PropTypes.func
}

export default Skill;