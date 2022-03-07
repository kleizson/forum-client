export interface AnswerInterface {
  author: string;
  body: string;
  timestamp: number;
}
export interface AnswerRequestParamsInterface {
  author: string;
  body: string;
  questionUid: string;
}
