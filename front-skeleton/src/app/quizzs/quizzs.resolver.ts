import { inject } from "@angular/core"
import { ResolveFn } from "@angular/router"
import { Quizz } from "models/quizz.model"
import { QuizzService } from "services/quizz.service"

export const QuizzsResolver: ResolveFn<Quizz[]> = () => {
  return inject(QuizzService).findAll()
}
