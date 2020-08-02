import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ActionItemSelected } from "actions";
import { Select, HelperText, Button } from "../styles";

const PlanetsSelect = ({ planets, className, classNameTitle }) => {
  const [planetsSelected, setPlanetsSelected] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleChange = name => {
    if (planetsSelected.length !== 2) {
      setFormActive(true);
      if (planetsSelected.includes(name)) {
        const newSelect = planetsSelected.map(p => (p === name ? name : p));
        setPlanetsSelected(newSelect);
      } else {
        setPlanetsSelected([...planetsSelected, name]);
      }
    } else {
      setFormActive(false);
    }
  };

  useEffect(() => {
    if (formActive) {
      planetsSelected.length === 2
        ? setError("")
        : setError("You must select 2 different planets");
    }
  }, [planetsSelected, formActive, error, dispatch]);

  const handleCreate = () => {
    if (!error && planetsSelected.length === 2) {
      dispatch(ActionItemSelected(planetsSelected, "planets", "starships"));
    }
  };

  return (
    <>
      <div className={className}>
        <p className={classNameTitle}>Planets</p>
      </div>
      <hr />
      {error !== "" && <HelperText color="red">{error}</HelperText>}
      <Select onChange={e => handleChange(e.target.value)} name="planets">
        <option value="-"></option>
        {planets &&
          planets.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="planets" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {planets &&
          planets.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Button onClick={handleCreate}>Guardar</Button>
    </>
  );
};

PlanetsSelect.propTypes = {
  planets: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string.isRequired,
};
PlanetsSelect.defaultProps = {
  planets: [],
  className: "",
  classNameTitle: "",
};
export default PlanetsSelect;
