import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActionItems } from "actions";
import Pagination from "../Pagination";
import Loading from "components/Loading";
import { ItemsContainer, ItemCard } from "./styles";

const Items = () => {
  const { items, loading, nextPage, prevPage } = useSelector(
    ({ items }) => items
  );

  const history = useHistory();

  const handleGetItems = url => {};

  if (loading) {
    return <Loading loading={true} />;
  }
  return (
    <>
      <ItemsContainer>
        {items.map((item, i) => {
          return (
            <ItemCard
              key={i}
              onClick={() => history.push(`details/${item.name}`)}
            >
              <div className="card">{item.name}</div>
            </ItemCard>
          );
        })}
      </ItemsContainer>
      <Pagination next={nextPage} prev={prevPage} action={ActionItems} />
    </>
  );
};

Items.defaultProps = {};
export default Items;
