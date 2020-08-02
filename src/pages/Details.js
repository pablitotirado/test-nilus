import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { components } from "components/Details";
import { Loading } from "components";
import { ContainerCenter } from "globalStyles";

const Details = () => {
  const {
    location: { state },
  } = useHistory();

  const { item, loading } = useSelector(({ item }) => item);

  const Component = components[state];

  if (loading) {
    return <Loading loading={true} />;
  }
  return (
    <ContainerCenter>
      <Component {...item} />
    </ContainerCenter>
  );
};

export default Details;
