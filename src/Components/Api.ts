import { shuffleArray } from "./Util";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & {
  asnwers: string[];
};
export const fetchData = async (amount: number, difficulty: string) => {
  const endpoints = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;
  const data = await fetch(endpoints);
  const anserData = await data.json();

  return anserData.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
