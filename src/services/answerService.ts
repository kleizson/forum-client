import { AnswerRequestParamsInterface } from "../interfaces/answerInterface";
import api from "./api";

export const getAllAnswers = async (questionUid: string) => {
  const response = await api.get(`/answers/${questionUid}`);

  return response;
};

export const createAnswer = async (
  answersParams: AnswerRequestParamsInterface
) => {
  const response = await api.post("/answers", answersParams);

  return response;
};
