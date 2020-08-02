import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ActionItemSelected } from "actions";
import { Select, HelperText, Button } from "../styles";

const PeopleSelect = ({ people, className, classNameTitle }) => {
  const [peopleSelected, setPeopleSelected] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleChange = name => {
    if (peopleSelected.length !== 6) {
      setFormActive(true);
      if (peopleSelected.includes(name)) {
        const newSelect = peopleSelected.map(p => (p === name ? name : p));
        setPeopleSelected(newSelect);
      } else {
        setPeopleSelected([...peopleSelected, name]);
      }
    } else {
      setFormActive(false);
    }
  };

  useEffect(() => {
    if (formActive) {
      peopleSelected.length === 6
        ? setError("")
        : setError("You must select 6 different people");
    }
  }, [peopleSelected, formActive, error, dispatch]);

  const handleCreate = () => {
    if (!error && peopleSelected.length === 6) {
      dispatch(ActionItemSelected(peopleSelected, "people", "planets"));
    }
  };

  return (
    <>
      <div className={className}>
        <p className={classNameTitle}>People</p>
      </div>
      <hr />
      {error !== "" && <HelperText color="red">{error}</HelperText>}
      <Select onChange={e => handleChange(e.target.value)} name="people">
        <option value="-"></option>
        {people &&
          people.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="people" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {people &&
          people.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="people" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {people &&
          people.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="people" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {people &&
          people.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="people" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {people &&
          people.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="people" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {people &&
          people.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Button onClick={handleCreate}>Guardar</Button>
    </>
  );
};

PeopleSelect.propTypes = {
  people: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string.isRequired,
};
PeopleSelect.defaultProps = {
  people: [],
  className: "",
  classNameTitle: "",
};
export default PeopleSelect;
