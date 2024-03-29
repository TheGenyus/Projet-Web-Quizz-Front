import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { UserService } from "services/user.service"
import { User } from "models/user.model"

export const UserDetailsResolver: ResolveFn<User> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  if (route.params["id"] == "new") {
    return new Observable((observer) => {
      observer.next({ username: "" })
    })
  }
  return inject(UserService).findById(parseInt(route.params["id"], 10))
}
