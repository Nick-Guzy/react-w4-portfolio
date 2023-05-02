import React from "react";
import ReusableBioForm from "./ReusableBioForm";
import PropTypes from "prop-types";

function EditBioForm (props) {
  const { bio } = props;

  function handleEditBioFormSubmission(event) {
    event.preventDefault();
    const updatedBio = { 
      name: event.target.name.value,
      age: event.target.age.value,
      contact: event.target.contact.value,
      description: event.target.description.value,
      id: bio.id,
      whenBioClicked: PropTypes.func
    };
    props.onEditBio(updatedBio);
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
  bio: PropTypes.object
};

export default EditBioForm;
