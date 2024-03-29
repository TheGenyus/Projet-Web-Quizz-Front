import { inject } from "@angular/core"
import { ResolveFn } from "@angular/router"
import { User } from "models/user.model"
import { UserService } from "services/user.service"

export const UsersResolver: ResolveFn<User[]> = () => {
  return inject(UserService).findAll()
}
