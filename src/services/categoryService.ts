import { CategoryInterfaceParams } from "../interfaces/categoryInterface";
import api from "./api";

export const getAllCategories = async () => {
  const response = await api.get<CategoryInterfaceParams>("/categories");

  return response;
};

export const createCategory = async (name: string) => {
  const response = await api.post("/categories", {
    name,
  });

  return response;
};

export const deleteCategory = async (categoryUid: string) => {
  const response = await api.delete(`/categories/${categoryUid}`);

  return response;
};
