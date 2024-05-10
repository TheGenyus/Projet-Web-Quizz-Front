import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Quizz } from "models/quizz.model"
import { ActivatedRoute, Router } from "@angular/router"
import { QuizzService } from "services/quizz.service"

@Component({
  selector: "quizz-details",
  templateUrl: "./quizz-details.component.html",
  styleUrls: ["./quizz-details.component.scss"],
})
export class QuizzDetailsComponent {
  quizz$: Observable<Quizz> = this._route.data.pipe(map((data) => data["quizz"]))

  constructor(
    private _route: ActivatedRoute,
    private quizzService: QuizzService,
    private router: Router,
  ) {
  }

  save(quizz: Quizz) {
    const id = this._route.snapshot.params["id"]

    if (id == "new") {
      console.log(quizz);
      this.quizzService.create(quizz).subscribe(() => {
        this.router.navigate(["quizzs"])
      })
    } else {
      this.quizzService.update(id, quizz).subscribe(() => {
        this.router.navigate(["quizzs"])
      })
    }
  }
}
