import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Quizz } from "models/quizz.model"
import { ActivatedRoute, Router } from "@angular/router"
import { QuizzService } from "services/quizz.service"

@Component({
  selector: "quizzs",
  templateUrl: "./quizzs-player.component.html",
  styleUrls: ["./quizzs-player.component.scss"],
})
export class QuizzsPlayerComponent {
  quizzs$: Observable<Quizz[]> = this._route.data.pipe(map((data) => data["quizzs"]))

  constructor(private _route: ActivatedRoute, private quizzService: QuizzService, private router: Router) {}
}
