import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from "../../contexts/authContext";
import { CategoryInterface } from "../../interfaces/categoryInterface";
import { getAllCategories } from "../../services/categoryService";
import { createQuestion } from "../../services/questionService";

import { Main, TextArea } from "./styles";

const CreateQuestion = () => {
  const { currentUser } = useAuth();

  const [author, setAuthor] = useState<string | null>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const navigate = useNavigate();

  const [categories, setCategories] = useState<CategoryInterface>({});
  const [categoryUid, setCategoryUid] = useState<string>("");

  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  function onBodyChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setBody(event.target.value);
  }

  function onCategoryUidChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setCategoryUid(event.target.value);
  }

  async function onSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    await createQuestion({
      author,
      title,
      body,
      categoryUid,
    });

    navigate("/");
  }

  useEffect(() => {
    getAllCategories().then((response) => {
      const { categories } = response.data;
      setCategories(categories);
      setCategoryUid(Object.keys(categories)[0]);
    });

    if (currentUser) setAuthor(currentUser.displayName);
  }, [currentUser]);

  return (
    <Main>
      <h1>Criar Pergunta</h1>
      <form onSubmit={onSubmit}>
        <Input>
          <Input.Input
            onInputChange={onTitleChange}
            type="text"
            id="title"
            placeholder="Título da pergunta"
          />
        </Input>

        <TextArea cols={30} rows={10} onChange={onBodyChange}></TextArea>
        <select defaultValue={categoryUid} onChange={onCategoryUidChange}>
          {Object.entries(categories).map(([categoryKey, categoryValue]) => {
            return (
              <option key={categoryKey} value={categoryKey}>
                {categoryValue.name}
              </option>
            );
          })}
        </select>

        <Button>Criar</Button>
      </form>
    </Main>
  );
};

export default CreateQuestion;
