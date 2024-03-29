import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { User } from "models/user.model"
import { ActivatedRoute, Router } from "@angular/router"
import { Course } from "models/course.model"
import { CourseService } from "services/course.service"
import { UserService } from "services/user.service"
import { Major } from "../../models/major.model"
import { MajorService } from "../../services/major.service"

@Component({
  selector: "user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent {
  user$: Observable<User> = this._route.data.pipe(map((data) => data["user"]))
  allMajors$: Observable<Major[]> | undefined
  allCourses$: Observable<Course[]> | undefined
  majorSelectModel: Major | null = null
  courseSelectModel: Course | null = null
  notSelectedCourse: boolean | undefined
  today = new Date(Date.now())

  constructor(
    private _route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService,
    private majorService: MajorService,
    private router: Router,
  ) {
    this.allMajors$ = this.majorService.findAll()
  }

  courseClick() {
    this.allCourses$ = this.courseService.findAll()
  }

  save(user: User) {
    const userId = this._route.snapshot.params["userId"]

    if (userId == "new") {
      this.userService.create(user).subscribe(() => {
        this.router.navigate(["utilisateurs"])
      })
    } else {
      this.userService.update(userId, user).subscribe(() => {
        this.router.navigate(["utilisateurs"])
      })
    }
  }
}
