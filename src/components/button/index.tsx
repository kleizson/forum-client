import React from "react";
import { ButtonComponent } from "./styles";

type ButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;
};

export default Button;
