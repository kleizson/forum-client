import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

type AuthorizedRouteProps = {
  children: JSX.Element | null;
};

const AuthorizedRoute = ({ children }: AuthorizedRouteProps) => {
  const [authorized, setAuthorized] = useState<boolean | undefined>(true);
  const { isAuthorized } = useAuth();

  useEffect(() => {
    isAuthorized().then((isAuthorized) => {
      setAuthorized(isAuthorized);
    });
  }, [isAuthorized]);

  return authorized ? children : <Navigate to="/signin" />;
};

export default AuthorizedRoute;
