export interface QuestionInterface {
  [key: string]: {
    author: string;
    title: string;
    body: string;
    timestamp: number;
    categoryUid: string;
  };
}

export interface QuestionsInterfaceParams {
  questions: QuestionInterface;
}
export interface QuestionInterfaceParams {
  question: QuestionInterface;
}
