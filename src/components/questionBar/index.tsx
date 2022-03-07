import React from "react";
import { QuestionInterface } from "../../interfaces/questionInterface";

import { Container, Author, TimesTamp, LinkStyle } from "./styles";

type QuestionBarProps = {
  questions: QuestionInterface;
  categoryUid: string;
};

const QuestionBar = ({ questions, categoryUid }: QuestionBarProps) => {
  function filterQuestions() {
    return Object.entries(questions).filter(([, questionValue]) => {
      return questionValue.categoryUid === categoryUid;
    });
  }

  function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);

    const dateTime = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const dateHours = `${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}`;
    return `${dateTime} ${dateHours}`;
  }

  return (
    <>
      {filterQuestions().map(([key, { author, title, timestamp }]) => {
        return (
          <Container key={`${title}-${timestamp}`}>
            <LinkStyle to={`/question/${key}`}>{title}</LinkStyle>
            <div>
              <Author>{author}</Author>•
              <TimesTamp> {formatTimestamp(timestamp)}</TimesTamp>
            </div>
          </Container>
        );
      })}
    </>
  );
};

export default QuestionBar;
