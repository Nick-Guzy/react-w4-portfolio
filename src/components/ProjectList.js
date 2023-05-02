import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

function ProjectList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.projectList.map((project) =>
        <Project 
          whenProjectClicked={props.onProjectSelection}
          title={project.title}
          link={project.link}
          description={project.description}
          date={project.date}
          id={project.id}
          key={project.id}/>
      )}
    </React.Fragment>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.array,
  onProjectSelection: PropTypes.func
};

export default ProjectList;

