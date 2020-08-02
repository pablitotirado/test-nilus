import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ItemCard = styled.div`
  padding: 2rem;
  .card {
    background-color: white;
    color: black;
    border: 2px solid #e48942;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;
