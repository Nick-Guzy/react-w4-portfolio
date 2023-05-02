import React from "react";
import PropTypes from "prop-types";

function ProjectDetail(props){
  const { project, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Project Detail</h1>
      <h3>{project.title}</h3>
      <p>{project.link}</p>
      <p><em>{project.description}</em></p>
      <p>{project.date}</p>
      <button onClick={onClickingEdit}>Update Project</button>
      <button onClick={()=> onClickingDelete(project.id)}>Close Project</button>
      <hr/>
    </React.Fragment>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ProjectDetail;


// Project.propTypes = {
//   title: PropTypes.string,
//   link: PropTypes.string,
//   description: PropTypes.string,
//   date: PropTypes.string,
//   id: PropTypes.string,
//   whenProjectClicked: PropTypes.func