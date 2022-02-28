import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "../../components/button";
import Input from "../../components/input";

import { Section, LinkStyle } from "./styles";
import { auth } from "../../config/fiorebase-config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  async function onSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  }

  return (
    <Section>
      <form onSubmit={onSubmit}>
        <div className="container">
          <h1>Entrar</h1>
          <Input>
            <Input.Label type="email">Email:</Input.Label>

            <Input.Input
              onInputChange={onEmailChange}
              type="email"
              id="email"
              placeholder="Your E-Mail Address"
            />
          </Input>
          <Input>
            <Input.Label type="password">Email:</Input.Label>

            <Input.Input
              onInputChange={onPasswordChange}
              type="password"
              id="pwd"
              placeholder="Your password"
            />
          </Input>
          <Button>Entrar</Button>
        </div>

        <LinkStyle to="/signUp">Não tem uma conta? Se cadastre!</LinkStyle>
      </form>
    </Section>
  );
};

export default SignIn;
