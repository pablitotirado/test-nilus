import React from "react";
import { useDispatch } from "react-redux";
import { PaginationContainer } from "./styles";

export const Pagination = ({ next, prev, action }) => {
  const dispatch = useDispatch();
  return (
    <>
      <PaginationContainer>
        {prev && (
          <div className="pag" onClick={() => dispatch(action(prev))}>
            {"<"}
          </div>
        )}
        {next && (
          <div className="pag" onClick={() => dispatch(action(next))}>
            {">"}
          </div>
        )}
      </PaginationContainer>
    </>
  );
};
export default Pagination;
