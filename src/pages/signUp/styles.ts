import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .container {
    width: 80%;
    height: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
  }

  form {
    height: 70%;
    width: 30rem;
    background-color: #5c5d8d;
    box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.17);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #fafbfc;
  margin-top: 10%;

  &:hover {
    text-decoration: underline;
  }
`;
