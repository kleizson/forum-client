import React from "react";
import { InputComponent } from "./styles";

type InputProps = {
  type?: string;
  placeholder?: string;
  id?: string;
  children?: React.ReactNode;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ children }: InputProps) => {
  return <div>{children}</div>;
};

Input.Label = ({ type, children }: InputProps) => (
  <label htmlFor={type}>{children}</label>
);
Input.Input = ({ type, placeholder, id, onInputChange }: InputProps) => (
  <InputComponent
    onChange={onInputChange}
    type={type}
    id={id}
    placeholder={placeholder}
  />
);

export default Input;
