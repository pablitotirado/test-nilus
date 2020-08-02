import React from "react";
import PropTypes from "prop-types";
import { CardDetails, Icon } from "../styles";

const PlanetsDetails = ({ climate, diameter, gravity, name, terrain }) => {
  return (
    <CardDetails>
      <div className="row">
        <h1 className="name">{name}</h1>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Weather: </span>
          {climate}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Diameter: </span>
          {diameter}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-birthday-cake" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Gravity: </span>
          {gravity}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-venus-mars" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Terrain: </span>
          {terrain}
        </p>
      </div>
    </CardDetails>
  );
};

PlanetsDetails.defaultProps = {
  climate: "",
  diameter: "",
  gravity: "",
  name: "",
  terrain: "",
};

PlanetsDetails.propTypes = {
  climate: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
};

export default PlanetsDetails;
