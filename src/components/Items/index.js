import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActionItems } from "actions";
import { ItemsContainer, ItemCard } from "./styles";
import { ActionItemActive } from "actions";
import Pagination from "../Pagination";
import Loading from "components/Loading";

const Items = () => {
  const { items, loading, nextPage, prevPage } = useSelector(
    ({ items }) => items
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const handleGetItem = ({ name, url }) => {
    const query = history.location.pathname;
    dispatch(ActionItemActive(url));
    history.push(`details/${name}`, query.substr(1, query.length));
  };

  if (loading) {
    return <Loading loading={true} />;
  }

  return (
    <>
      <ItemsContainer>
        {items.map((item, i) => {
          return (
            <ItemCard key={i} onClick={() => handleGetItem(item)}>
              <div className="card">{item.name}</div>
            </ItemCard>
          );
        })}
      </ItemsContainer>
      <Pagination next={nextPage} prev={prevPage} action={ActionItems} />
    </>
  );
};

export default Items;
