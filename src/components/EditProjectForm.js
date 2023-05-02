import React from "react";
import ReusableProjectForm from "./ReusableProjectForm";
import PropTypes from "prop-types";

function EditProjectForm (props) {
  const { project } = props;

  function handleEditProjectFormSubmission(event) {
    event.preventDefault();
    const updatedProject = {
      title: event.target.title.value,
      link: event.target.link.value,
      description: event.target.description.value,
      date: event.target.date.value,
      id: project.id,
    };
    props.onEditProject(updatedProject);
  }

  return (
    <React.Fragment>
      <ReusableProjectForm 
        formSubmissionHandler={handleEditProjectFormSubmission} 
        buttonText="Update Project" />
    </React.Fragment>
  );
}

EditProjectForm.propTypes = {
  onEditProject: PropTypes.func,
  project: PropTypes.object
};

export default EditProjectForm;
