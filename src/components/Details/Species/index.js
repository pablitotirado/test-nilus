import React from "react";
import PropTypes from "prop-types";
import { CardDetails, Icon } from "../styles";

const SpeciesDetails = ({
  name,
  eye_colors,
  average_height,
  average_lifespan,
  language,
  skin_colors,
  hair_colors,
}) => {
  return (
    <CardDetails>
      <div className="row">
        <h1 className="name">{name}</h1>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Eye color: </span>
          {eye_colors}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Skin tone: </span>
          {skin_colors}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-birthday-cake" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Average Height: </span>
          {average_height}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-venus-mars" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Average Lifespan: </span>
          {average_lifespan}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Language: </span>
          {language}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Hair color: </span>
          {hair_colors}
        </p>
      </div>
    </CardDetails>
  );
};

SpeciesDetails.defaultProps = {
  name: "",
  eye_colors: "",
  average_height: "",
  average_lifespan: "",
  language: "",
  skin_colors: "",
  hair_colors: "",
};

SpeciesDetails.propTypes = {
  name: PropTypes.string.isRequired,
  eye_colors: PropTypes.string.isRequired,
  average_height: PropTypes.string.isRequired,
  average_lifespan: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  skin_colors: PropTypes.string.isRequired,
  hair_colors: PropTypes.string.isRequired,
};

export default SpeciesDetails;
