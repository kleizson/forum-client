import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import Button from "../button";

import { HeaderStyled, LinkStyled, NavContainer, UserName } from "./styles";

const Header = () => {
  const [authorized, setAuthorized] = useState<boolean | undefined>(false);
  const { logout, currentUser, isAuthorized } = useAuth();

  useEffect(() => {
    isAuthorized().then((isAuthorized) => {
      setAuthorized(isAuthorized);
    });
  }, [isAuthorized]);

  return currentUser ? (
    <HeaderStyled>
      <LinkStyled to="/">
        <h1>Fórum App</h1>
      </LinkStyled>

      <UserName>Bem vindo(a), {currentUser.displayName}!</UserName>

      <NavContainer>
        <LinkStyled to="/create-question">Criar nova pergunta</LinkStyled>
        {authorized ? (
          <LinkStyled to="/manage-categories">Gerenciar Categorias</LinkStyled>
        ) : null}
        <Button onClick={logout}>Sair</Button>
      </NavContainer>
    </HeaderStyled>
  ) : null;
};

export default Header;
