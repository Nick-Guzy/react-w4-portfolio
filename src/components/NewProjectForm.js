import React from "react";
import PropTypes from "prop-types"; 
import ReusableProjectForm from "./ReusableProjectForm";

function NewProjectForm(props){

  function handleNewProjectFormSubmission(event) {
    event.preventDefault();
    props.onNewProjectCreation({
      title: event.target.title.value, 
      link: event.target.link.value, 
      description: event.target.description.value, 
      date: event.target.date.value, 
    });
  }

  return (
    <React.Fragment>
      <ReusableProjectForm 
        formSubmissionHandler={handleNewProjectFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewProjectForm.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default NewProjectForm;