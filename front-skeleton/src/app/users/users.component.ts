import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { User } from "models/user.model"
import { ActivatedRoute, Router } from "@angular/router"
import { UserService } from "services/user.service"

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
  users$: Observable<User[]> = this._route.data.pipe(map((data) => data["users"]))

  constructor(private _route: ActivatedRoute, private userService: UserService, private router: Router) {}

  deleteUser(event: any, user: User) {
    event.stopPropagation()
    this.userService.delete(user).subscribe(() => this.router.navigate(["users"]))
  }

  searchByMajorAndCourse($event: Observable<User[]>) {
    this.users$ = $event
  }
}
