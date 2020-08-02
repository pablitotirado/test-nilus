import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionGetItemsLeague } from "actions";
import { League as LeagueComponent, Loading } from "components";
import { ContainerCenter } from "globalStyles";

const League = () => {
  const { items, loading } = useSelector(({ league }) => league);

  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(ActionGetItemsLeague());
    })();
  }, [dispatch]);

  if (loading) {
    return <Loading loading={true} />;
  }
  return (
    <ContainerCenter>
      <LeagueComponent {...items} />;
    </ContainerCenter>
  );
};

export default League;
