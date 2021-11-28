type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestion: number;
};
export const QuestionCard = (props: QuestionCardProps) => {
  return (
    <>
      <div>
        <p className="number">
          {props.questionNr}/{props.totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{ __html: props.question }}></p>
        <div>
          {props.answers.map((answer) => (
            <div>
              <button disabled={props.userAnswer} onClick={props.callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
