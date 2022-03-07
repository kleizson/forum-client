import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { createAnswer } from "../../services/answerService";

import Button from "../button";

import { TextArea, SendReply } from "./styles";

type AnswerProps = {
  questionUid: string;
  onCreate: () => void;
};

const CreateAnswer = ({ questionUid, onCreate }: AnswerProps) => {
  const { currentUser } = useAuth();

  const [author, setAuthor] = useState<string>("");
  const [body, setBody] = useState<string>("");

  function onBodyChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setBody(event.target.value);
  }

  async function onSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    await createAnswer({
      author,
      body,
      questionUid,
    });

    onCreate();
    setBody("");
  }

  useEffect(() => {
    if (currentUser) setAuthor(currentUser.displayName as string);
  }, [currentUser]);

  return (
    <div>
      <SendReply>Enviar Resposta</SendReply>
      <form onSubmit={onSubmit}>
        <TextArea
          cols={30}
          rows={10}
          value={body}
          onChange={onBodyChange}
        ></TextArea>
        <Button>Responder</Button>
      </form>
    </div>
  );
};

export default CreateAnswer;
