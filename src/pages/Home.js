import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionItems } from "actions";
import { Items } from "components";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(ActionItems());
    })();
  }, [dispatch]);

  return <Items />;
};

export default Home;
