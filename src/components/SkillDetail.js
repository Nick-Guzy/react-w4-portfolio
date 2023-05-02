import React from "react";
import PropTypes from "prop-types";

function SkillDetail(props){
  const { skill, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Skill Detail</h1>
      <h3>{skill.title}</h3>
      <p><em>{skill.yearsOfExperience}</em></p>
      <p><em>{skill.description}</em></p>
      <button onClick={onClickingEdit}>Update Skill</button>
      <button onClick={()=> onClickingDelete(skill.id)}>Close Skill</button>
      <hr/>
    </React.Fragment>
  );
}

SkillDetail.propTypes = {
  skill: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default SkillDetail;