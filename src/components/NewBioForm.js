import React from "react";
import PropTypes from "prop-types";
import ReusableBioForm from "./ReusableBioForm";

function NewBioForm(props) {

  function handleNewBioFormSubmission(event) {
    event.preventDefault();
    props.onNewBioCreation({
      name: event.target.name.value,
      age: event.target.age.value,
      contact: event.target.contact.value,
      description: event.target.description.value
    });
  }

  return (
    <React.Fragment>
      <ReusableBioForm
        formSubmissionHandler={handleNewBioFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewBioForm.propTypes = {
  onNewBioCreation: PropTypes.func
};

export default NewBioForm;