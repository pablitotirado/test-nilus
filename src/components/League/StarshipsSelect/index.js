import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ActionItemSelected, ActionLeagueComplete } from "actions";
import { Select, HelperText, Button } from "../styles";

const StarshipsSelect = ({ starships, className, classNameTitle }) => {
  const [starshipsSelected, setStarshipsSelected] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = name => {
    if (starshipsSelected.length !== 3) {
      setFormActive(true);
      if (starshipsSelected.includes(name)) {
        const newSelect = starshipsSelected.map(p => (p === name ? name : p));
        setStarshipsSelected(newSelect);
      } else {
        setStarshipsSelected([...starshipsSelected, name]);
      }
    } else {
      setFormActive(false);
    }
  };

  useEffect(() => {
    if (formActive) {
      starshipsSelected.length === 3
        ? setError("")
        : setError("You must select 3 different starships");
    }
  }, [starshipsSelected, formActive, error, dispatch]);

  const handleCreate = () => {
    if (!error && starshipsSelected.length === 3) {
      dispatch(ActionItemSelected(starshipsSelected, "starships", null));
      dispatch(ActionLeagueComplete());
    }
  };

  return (
    <>
      <div className={className}>
        <p className={classNameTitle}>Starships</p>
      </div>
      <hr />
      {error !== "" && <HelperText color="red">{error}</HelperText>}
      <Select onChange={e => handleChange(e.target.value)} name="starships">
        <option value="-"></option>
        {starships &&
          starships.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="starships" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {starships &&
          starships.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Select name="starships" onChange={e => handleChange(e.target.value)}>
        <option value="-"></option>
        {starships &&
          starships.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
      </Select>
      <Button onClick={handleCreate}>Guardar</Button>
    </>
  );
};

StarshipsSelect.propTypes = {
  starships: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string.isRequired,
};
StarshipsSelect.defaultProps = {
  starships: [],
  className: "",
  classNameTitle: "",
};

export default StarshipsSelect;
