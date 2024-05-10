import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router"
import { QuizzService } from "services/quizz.service"
import { Question } from "../../models/question.model";
import {Reponse} from "../../models/reponse.model";

export const QuizzQuestionsResolver: ResolveFn<Question[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(QuizzService).findQuestionsFromQuizz(route.params["id"])
}

export const QuestionReponsesResolver: ResolveFn<Reponse[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(QuizzService).findReponsesFromQuestion(route.params["id"])
}
