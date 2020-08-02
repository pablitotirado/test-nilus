import styled from "styled-components";

export const CardDetails = styled.div`
  margin: 0.5rem 0;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #697078;
  border-radius: 5px;
  width: 40%;
  padding: 1rem;
  .row {
    display: flex;
    align-items: center;
  }

  .text {
    color: white;
    font-size: 1rem;
    flex-basis: 80%;
    text-transform: capitalize;
  }

  .name {
    text-align: center;
    width: 100%;
    color: white;
  }

  .title {
    font-weight: bold;
    color: white;
  }
`;

export const Icon = styled.i`
  color: #e48942;
  font-size: 1.4rem;
  flex-basis: 20%;
  text-align: center;
`;
