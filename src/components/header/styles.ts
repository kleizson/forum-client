import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #ffffff;
  color: #423e3b;

  padding: 5px 20px;
  height: 50px;
  box-shadow: 0px 1px 1px rgba(37, 37, 37, 0.17);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #423e3b;
  margin-right: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.strong``;
