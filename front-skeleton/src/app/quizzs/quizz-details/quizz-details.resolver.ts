import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { QuizzService } from "services/quizz.service"
import { Quizz } from "models/quizz.model"
import {Question} from "../../models/question.model";

export const QuizzDetailsResolver: ResolveFn<Quizz> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  if (route.params["id"] == "new") {
    return new Observable((observer) => {
      observer.next({title: "", description: "", questions: []})
    })
  }
  return inject(QuizzService).findById(parseInt(route.params["id"], 10))
}
