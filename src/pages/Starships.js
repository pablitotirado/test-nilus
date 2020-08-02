import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionItems } from "actions";
import { Items } from "components";

const Starships = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(ActionItems("http://swapi.dev/api/starships/"));
    })();
  }, [dispatch]);

  return <Items />;
};

export default Starships;
