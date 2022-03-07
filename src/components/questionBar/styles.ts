import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  color: #423e3b;

  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  div {
    font-size: 12px;
  }
`;

export const Author = styled.span`
  margin-right: 5px;
  color: #9d9d9d;
`;

export const TimesTamp = styled.time`
  color: #6a6a6a;
`;

export const LinkStyle = styled(Link)`
  color: #41444e;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`;
