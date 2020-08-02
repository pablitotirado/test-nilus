import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  padding: 0.1rem;
  margin: 0.5rem 0;
`;

export const HelperText = styled.div`
  color: ${props => props.color};
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  display: block;
  width: 60%;
  margin: 0 auto;
  background: #e18d46;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 0.4rem 1rem;
`;

export const ContainerLeague = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .title {
    color: white;
  }

  .cards {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;
