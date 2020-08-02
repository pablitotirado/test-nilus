import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionItems } from "actions";
import { Items } from "components";

const Species = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(ActionItems("http://swapi.dev/api/species/"));
    })();
  }, [dispatch]);

  return <Items />;
};

export default Species;
