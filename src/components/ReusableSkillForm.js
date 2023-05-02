import React from "react";
import PropTypes from "prop-types";

function ReusableSkillForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Skill Title' />
        <input
          type='text'
          name='yearsOfExperience'
          placeholder='Years of Experience' />
        <textarea
          name='description'
          placeholder='Describe your skill.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableSkillForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableSkillForm;