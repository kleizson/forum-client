import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  h1 {
    /* align-self: flex-start; */
  }

  .container {
    width: 80%;
    height: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
  }

  label {
    display: block;
  }

  /* input {
    background: #fff;
    color: $input-text-color;
    font: inherit;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 18px 0 18px 18px;
    margin: 10px 0;
    width: calc(100% - 18px);
  } */

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
