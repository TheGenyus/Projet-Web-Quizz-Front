import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { User } from "models/user.model"
import { ActivatedRoute, Router } from "@angular/router"
import { UserService } from "services/user.service"

@Component({
  selector: "user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent {
  user$: Observable<User> = this._route.data.pipe(map((data) => data["user"]))

  constructor(
    private _route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {
  }


  save(user: User) {
    const id = this._route.snapshot.params["id"]

    if (id == "new") {
      console.log(user);
      this.userService.create(user).subscribe(() => {
        this.router.navigate(["utilisateurs"])
      })
    } else {
      this.userService.update(id, user).subscribe(() => {
        this.router.navigate(["utilisateurs"])
      })
    }
  }
}
