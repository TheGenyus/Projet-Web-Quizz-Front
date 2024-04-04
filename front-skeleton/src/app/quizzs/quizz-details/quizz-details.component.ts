import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Quizz } from "models/quizz.model"
import { ActivatedRoute, Router } from "@angular/router"
import { Course } from "models/course.model"
import { CourseService } from "services/course.service"
import { QuizzService } from "services/quizz.service"
import { Major } from "../../models/major.model"
import { MajorService } from "../../services/major.service"

@Component({
  selector: "quizz-details",
  templateUrl: "./quizz-details.component.html",
  styleUrls: ["./quizz-details.component.scss"],
})
export class QuizzDetailsComponent {
  quizz$: Observable<Quizz> = this._route.data.pipe(map((data) => data["quizz"]))
  allMajors$: Observable<Major[]> | undefined
  allCourses$: Observable<Course[]> | undefined
  majorSelectModel: Major | null = null
  courseSelectModel: Course | null = null
  notSelectedCourse: boolean | undefined
  today = new Date(Date.now())

  constructor(
    private _route: ActivatedRoute,
    private courseService: CourseService,
    private quizzService: QuizzService,
    private majorService: MajorService,
    private router: Router,
  ) {
    this.allMajors$ = this.majorService.findAll()
  }

  courseClick() {
    this.allCourses$ = this.courseService.findAll()
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
