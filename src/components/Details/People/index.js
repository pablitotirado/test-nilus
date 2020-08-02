import React from "react";
import PropTypes from "prop-types";
import { CardDetails, Icon } from "../styles";

const PeopleDetails = ({
  name,
  skin_color,
  eye_color,
  birth_year,
  gender,
  hair_color,
  height,
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
          {eye_color}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Skin tone: </span>
          {skin_color}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-birthday-cake" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Birth Year: </span>
          {birth_year}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-venus-mars" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Gender: </span>
          {gender}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Hair: </span>
          {hair_color}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Height: </span>
          {height}
        </p>
      </div>
    </CardDetails>
  );
};

PeopleDetails.defaultProps = {
  name: "",
  skin_color: "",
  eye_color: "",
  birth_year: "",
  gender: "",
  hair_color: "",
  height: "",
};

PeopleDetails.propTypes = {
  name: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default PeopleDetails;
