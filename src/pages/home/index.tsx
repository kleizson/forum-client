import React, { useEffect, useState } from "react";
import CategoryBar from "../../components/categoryBar";
import QuestionBar from "../../components/questionBar";
import { CategoryInterface } from "../../interfaces/categoryInterface";
import { QuestionInterface } from "../../interfaces/questionInterface";
import { getAllCategories } from "../../services/categoryService";
import { getAllQuestions } from "../../services/questionService";

import { Main, CategorySection } from "./styles";

const Home = () => {
  const [categories, setCategories] = useState<CategoryInterface>({});
  const [questions, setQuestions] = useState<QuestionInterface>({});

  useEffect(() => {
    getAllCategories().then((response) => {
      const { categories } = response.data;
      setCategories(categories);
    });

    getAllQuestions().then((response) => {
      const { questions } = response.data;
      setQuestions(questions);
    });
  }, []);

  return (
    <Main>
      <h2>Categorias</h2>
      {Object.entries(categories).map(([categoryKey, { name }]) => {
        return (
          <CategorySection key={categoryKey}>
            <CategoryBar>{name}</CategoryBar>
            <QuestionBar questions={questions} categoryUid={categoryKey} />
          </CategorySection>
        );
      })}
    </Main>
  );
};

export default Home;
