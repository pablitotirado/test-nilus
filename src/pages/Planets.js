import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionItems } from "actions";
import { Items } from "components";

const Planets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(ActionItems("http://swapi.dev/api/planets/"));
    })();
  }, [dispatch]);

  return (
    <>
      <Items />
    </>
  );
};

Planets.defaultProps = {};
export default Planets;
