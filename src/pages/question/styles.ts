import styled from "styled-components";

export const Main = styled.main`
  margin: 20px;
`;

export const Container = styled.article`
  padding: 20px;
  margin: 10px 0;

  color: #1d1d1d;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-top-color: #eee;
  border-right-color: #dfdfdf;
  border-bottom-color: #d2d2d2;
  border-left-color: #dfdfdf;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
  border-radius: 4px;

  display: flex;
`;

export const Title = styled.h2`
  padding: 10px;
  font-size: 26px;
  font-weight: 400;

  text-transform: capitalize;
`;

export const Author = styled.div`
  border-right: 1px solid #dfdfdf;
  margin: auto 0;
  padding: 20px;

  width: 5%;
  min-width: 100px;
`;

export const Body = styled.div`
  padding: 20px;
`;

export const Answers = styled.h3`
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
`;
