import styled from "styled-components";

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px auto;
  color: #423e3b;
  width: 50%;
`;

export const DeleteItem = styled.div`
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  border: 1px solid #dfdfdf;
  margin: 5px 0;
  padding: 10px;
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: 0;
  color: red;

  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
