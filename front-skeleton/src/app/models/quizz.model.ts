import {Question} from "./question.model";

export interface Quizz {
  id?: bigint
  title: string
  description: string
  questions: Question[]
}
