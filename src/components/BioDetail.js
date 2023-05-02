import React from "react";
import PropTypes from "prop-types";

function BioDetail(props){
  const { bio, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Bio Detail</h1>
      <h3>{bio.name}</h3>
      <p>{bio.age}</p>
      <p>{bio.contact}</p>
      <p><em>{bio.description}</em></p>
      <button onClick={onClickingEdit}>Update Bio</button>
      <button onClick={()=> onClickingDelete(bio.id)}>Close Bio</button>
      <hr/>
    </React.Fragment>
  );
}

BioDetail.propTypes = {
  bio: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default BioDetail;

// whenBioClicked={props.onBioSelection}
//           name={bio.name}
//           age={bio.age}
//           contact={bio.contact}
//           description={bio.description}