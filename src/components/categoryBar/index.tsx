import React from "react";

import { Container } from "./styles";

type CategoryBarProps = {
  children: string;
};

const CategoryBar = ({ children }: CategoryBarProps) => {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
};

export default CategoryBar;
