import React from "react";
import PropTypes from "prop-types";
import { CardDetails, Icon } from "../styles";

const StarshipsDetails = ({
  cargo_capacity,
  cost_in_credits,
  hyperdrive_rating,
  manufacturer,
  max_atmosphering_speed,
  model,
  name,
  starship_class,
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
          <span className="title">Capacity: </span>
          {cargo_capacity}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Cost: </span>
          {cost_in_credits}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-birthday-cake" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Hyperdrive: </span>
          {hyperdrive_rating}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-venus-mars" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Manufacturer: </span>
          {manufacturer}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Max Atmosphering Speed: </span>
          {max_atmosphering_speed}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Model: </span>
          {model}
        </p>
      </div>
      <hr />
      <div className="row">
        <Icon className="fa fa-eye" aria-hidden="true"></Icon>
        <p className="text">
          <span className="title">Starship Class: </span>
          {starship_class}
        </p>
      </div>
    </CardDetails>
  );
};

StarshipsDetails.defaultProps = {
  cargo_capacity: "",
  cost_in_credits: "",
  hyperdrive_rating: "",
  manufacturer: "",
  max_atmosphering_speed: "",
  model: "",
  name: "",
  starship_class: "",
};

StarshipsDetails.propTypes = {
  cargo_capacity: PropTypes.string.isRequired,
  cost_in_credits: PropTypes.string.isRequired,
  hyperdrive_rating: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  max_atmosphering_speed: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  starship_class: PropTypes.string.isRequired,
};
export default StarshipsDetails;
