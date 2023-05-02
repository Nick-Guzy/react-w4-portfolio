import React from "react";
import ReusableBioForm from "./ReusableBioForm";
import PropTypes from "prop-types";

function EditBioForm (props) {
  const { bio } = props;

  function handleEditBioFormSubmission(event) {
    event.preventDefault();
    props.onEditBio({
      name: PropTypes.string,
      age: PropTypes.string,
      contact: PropTypes.string,
      description: PropTypes.string,
      id: bio.id,
      whenBioClicked: PropTypes.func
    });
  }

  return (
    <React.Fragment>
      <ReusableBioForm 
        formSubmissionHandler={handleEditBioFormSubmission} 
        buttonText="Update Bio" />
    </React.Fragment>
  );
}

EditBioForm.propTypes = {
  onEditBio: PropTypes.func,
  project: PropTypes.object
};

export default EditBioForm;
