import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Quizz } from "models/quizz.model"
import { ActivatedRoute, Router } from "@angular/router"
import { QuizzService } from "services/quizz.service"

@Component({
  selector: "quizzs",
  templateUrl: "./quizzs.component.html",
  styleUrls: ["./quizzs.component.scss"],
})
export class QuizzsComponent {
  quizzs$: Observable<Quizz[]> = this._route.data.pipe(map((data) => data["quizzs"]))

  constructor(private _route: ActivatedRoute, private quizzService: QuizzService, private router: Router) {}

  deleteQuizz(event: any, quizz: Quizz) {
    event.stopPropagation()
    this.quizzService.delete(quizz).subscribe(() => this.router.navigate(["quizzs"]))
  }
}
