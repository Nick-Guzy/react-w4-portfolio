import React from "react";
import ReusableProjectForm from "./ReusableProjectForm";
import PropTypes from "prop-types";

function EditProjectForm (props) {
  const { project } = props;

  function handleEditProjectFormSubmission(event) {
    event.preventDefault();
    props.onEditProject({
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
      id: project.id,
      whenProjectClicked: PropTypes.func
    });
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
