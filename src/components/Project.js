import React from "react";
import PropTypes from "prop-types";

function Project(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenProjectClicked(props.id)}>
        <h3>{props.title} - {props.date}</h3>
        <p>{props.link}</p>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
  // uid: PropTypes.string,
  whenProjectClicked: PropTypes.func
}

export default Project;