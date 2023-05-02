import React from "react";
import PropTypes from "prop-types"; 
import ReusableSkillForm from "./ReusableSkillForm";

function NewSkillForm(props){

  function handleNewSkillFormSubmission(event) {
    event.preventDefault();
    props.onNewSkillCreation({
      title: event.target.title.value, 
      yearsOfExperience: event.target.yearsOfExperience.value, 
      description: event.target.description.value, 
    });
  }

  return (
    <React.Fragment>
      <ReusableSkillForm 
        formSubmissionHandler={handleNewSkillFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewSkillForm.propTypes = {
  onNewSkillCreation: PropTypes.func
};

export default NewSkillForm;