import {
  QuestionInterfaceParams,
  QuestionsInterfaceParams,
} from "../interfaces/questionInterface";
import api from "./api";

export const getAllQuestions = async () => {
  const response = await api.get<QuestionsInterfaceParams>("/questions");

  return response;
};

export const getQuestion = async (questionUid: string) => {
  const response = await api.get<QuestionInterfaceParams>(
    `/questions/${questionUid}`
  );

  return response;
};

export const createQuestion = async (questionParams: any) => {
  const response = await api.post("/questions", questionParams);

  return response;
};
