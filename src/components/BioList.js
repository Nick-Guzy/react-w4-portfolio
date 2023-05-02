import React from "react";
import Bio from "./Bio";
import PropTypes from "prop-types";

function BioList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.bioList.map((bio) =>
        <Bio 
          whenBioClicked={props.onBioSelection}
          name={bio.name}
          age={bio.age}
          contact={bio.contact}
          description={bio.description}
          id={bio.id}
          key={bio.id}/>
      )}
    </React.Fragment>
  );
}

BioList.propTypes = {
  bioList: PropTypes.array,
  onBioSelection: PropTypes.func
};

export default BioList;

