import React from "react";
import PropTypes from "prop-types";

function ReusableBioForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Bio Name' />
        <input
          type='text'
          name='age'
          placeholder='Bio Age' />
        <input
          type='text'
          name='contact'
          placeholder='Bio Contact Info' />
        <textarea
          name='description'
          placeholder='Describe your project.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableBioForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableBioForm;