import React from "react";
import PropTypes from "prop-types";

function Bio(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenBioClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <p><em>{props.contact}</em></p>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Bio.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  contact: PropTypes.string,
  id: PropTypes.string,
  whenBioClicked: PropTypes.func,
  age: PropTypes.string
}

export default Bio;