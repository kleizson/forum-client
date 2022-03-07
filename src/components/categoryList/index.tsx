import React, { useEffect, useState } from "react";
import { CategoryInterface } from "../../interfaces/categoryInterface";
import {
  deleteCategory,
  getAllCategories,
} from "../../services/categoryService";

import { DeleteContainer, DeleteItem, ButtonDelete } from "./styles";

const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryInterface>({});

  async function deleteCategoryRequest(categoryKey: string) {
    await deleteCategory(categoryKey);

    const newCategoriesList = { ...categories };
    delete newCategoriesList[categoryKey];

    setCategories(newCategoriesList);
  }

  useEffect(() => {
    getAllCategories().then((response) => {
      const { categories } = response.data;

      setCategories(categories);
    });
  }, []);

  return (
    <DeleteContainer>
      <h2>Categorias</h2>
      {Object.entries(categories).map(([categoryKey, categoryValue]) => {
        return (
          <DeleteItem key={categoryKey}>
            <div>{categoryValue.name}</div>
            <ButtonDelete onClick={() => deleteCategoryRequest(categoryKey)}>
              Deletar
            </ButtonDelete>
          </DeleteItem>
        );
      })}
    </DeleteContainer>
  );
};

export default CategoryList;
