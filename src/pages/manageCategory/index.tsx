import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import CategoryList from "../../components/categoryList";
import Input from "../../components/input";
import { createCategory } from "../../services/categoryService";

import { Main, CreateCategory } from "./styles";

const ManageCategory = () => {
  const [categoryName, setCategoryName] = useState<string>("");
  const navigate = useNavigate();

  function onCategoryNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setCategoryName(event.target.value);
  }

  async function onSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    await createCategory(categoryName);
    navigate("/");
  }

  return (
    <Main>
      <CreateCategory>Criar categoria</CreateCategory>
      <form onSubmit={onSubmit}>
        <Input>
          <Input.Input
            onInputChange={onCategoryNameChange}
            type="text"
            placeholder="Digite o nome da categoria"
          />
        </Input>
        <Button>Criar categoria</Button>
      </form>

      <CategoryList />
    </Main>
  );
};

export default ManageCategory;
