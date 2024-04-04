import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { User } from "models/user.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  private usersUrl = "http://localhost:8080/users"

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
  }

  update(id: number, user: User): Observable<User> {
    return this.http.post<User>(`${this.usersUrl}/${id}`, user)
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user)
  }

  delete(user: User) {
    return this.http.delete(`${this.usersUrl}/${user.id}`)
  }
}
