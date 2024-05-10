import { Component, OnInit } from "@angular/core"
import { map, Observable } from "rxjs"
import { ActivatedRoute } from "@angular/router"
import {Question} from "../../models/question.model";

@Component({
  selector: "quizz-questions",
  templateUrl: "./quizz-questions.component.html",
  styleUrls: ["./quizz-questions.component.scss"],
})
export class QuizzQuestionsComponent implements OnInit {
  questionsFromQuizz$: Observable<Question[]> = this._route.data.pipe(map((data) => data["questionsFromQuizz"]))

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {}
}
