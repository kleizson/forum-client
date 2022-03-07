import React from "react";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: JSX.Element | null;
};

const LoggedRoute = ({ children }: PrivateRouteProps) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/signin" />;
};

export default LoggedRoute;
