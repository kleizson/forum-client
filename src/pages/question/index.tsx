import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateAnswer from "../../components/createAnswer";
import { AnswerInterface } from "../../interfaces/answerInterface";
import { QuestionInterface } from "../../interfaces/questionInterface";
import { getAllAnswers } from "../../services/answerService";
import { getQuestion } from "../../services/questionService";

import { Main, Container, Title, Author, Body, Answers } from "./styles";

const Question = () => {
  const [question, setQuestion] = useState<QuestionInterface>({});
  const [answers, setAnswers] = useState<AnswerInterface[]>([]);
  const params = useParams();

  function updateAnswersList() {
    if (!params.uid) return;

    getAllAnswers(params.uid).then((response) => {
      const { answers } = response.data;
      setAnswers(Object.values(answers));
    });
  }

  useEffect(() => {
    if (params.uid) {
      getQuestion(params.uid).then((response) => {
        const { question } = response.data;
        setQuestion(question);
      });

      updateAnswersList();
    }
  });

  return (
    <Main>
      <Title>{question.title}</Title>
      <Container>
        <Author>{question.author}</Author>
        <Body>{question.body}</Body>
      </Container>
      <Answers>Respostas: </Answers>
      {answers.map(({ timestamp, author, body }) => {
        return (
          <Container key={timestamp}>
            <Author>{author}</Author>
            <Body>{body}</Body>
          </Container>
        );
      })}
      <CreateAnswer
        onCreate={updateAnswersList}
        questionUid={params.uid as string}
      />
    </Main>
  );
};

export default Question;
