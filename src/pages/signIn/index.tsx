import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";
import { auth } from "../../config/fiorebase-config";
import uiConfig from "../../config/firebaseui-config";
import { StyledFirebaseAuthStyled } from "./styles";

const SignIn = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Navigate to="/" />
  ) : (
    <StyledFirebaseAuthStyled uiConfig={uiConfig} firebaseAuth={auth} />
  );
};

export default SignIn;
