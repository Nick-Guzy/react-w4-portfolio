import React from "react";
import ReusableSkillForm from "./ReusableSkillForm";
import PropTypes from "prop-types";


function EditSkillForm (props) {
  const { skill } = props;

  function handleEditSkillFormSubmission(event) {
    event.preventDefault();
    const updatedSkill = {
      title: event.target.title.value,
      yearsOfEperience: event.target.yearsOfExperience.value,
      description: event.target.description.value,
      id: skill.id,
      // whenSkillClicked: PropTypes.func
    };
    props.onEditSkill(updatedSkill);
  }

  return (
    <React.Fragment>
      <ReusableSkillForm 
        formSubmissionHandler={handleEditSkillFormSubmission} 
        buttonText="Update Skill" />
    </React.Fragment>
  );
}

EditSkillForm.propTypes = {
  onEditSkill: PropTypes.func,
  skill: PropTypes.object
};

export default EditSkillForm;
