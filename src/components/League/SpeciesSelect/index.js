import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ActionItemSelected } from "actions";
import { Select, HelperText, Button } from "../styles";

const SpeciesSelect = ({ species, className, classNameTitle }) => {
  const [speciesSelected, setSpeciesSelected] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = name => {
    if (speciesSelected.length !== 3) {
      setFormActive(true);
      if (speciesSelected.includes(name)) {
        const newSelect = speciesSelected.map(p => (p === name ? name : p));
        setSpeciesSelected(newSelect);
      } else {
        setSpeciesSelected([...speciesSelected, name]);
      }
    } else {
      setFormActive(false);
    }
  };

  useEffect(() => {
    if (formActive) {
      speciesSelected.length === 3
        ? setError("")
        : setError("You must select 3 different species");
    }
  }, [speciesSelected, formActive, error, dispatch]);

  const handleCreate = () => {
    if (!error && speciesSelected.length === 3) {
      dispatch(ActionItemSelected(speciesSelected, "species", "people"));
    }
  };

  return (
    <>
      {error !== "" && <HelperText color="red">{error}</HelperText>}
      <div className={className}>
        <p className={classNameTitle}>Species</p>
      </div>
      <hr />
      <Select onChange={e => handleChange(e.target.value)} name="species">
        <option value="-"></option>
        {species &&
          species.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="species" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {species &&
          species.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="species" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {species &&
          species.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Button onClick={handleCreate}>Guardar</Button>
    </>
  );
};

SpeciesSelect.propTypes = {
  species: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string.isRequired,
};
SpeciesSelect.defaultProps = {
  species: [],
  className: "",
  classNameTitle: "",
};

export default SpeciesSelect;
