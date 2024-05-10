import { Injectable } from "@angular/core"
import {observable, Observable} from "rxjs"
import { Quizz } from "models/quizz.model"
import { HttpClient } from "@angular/common/http"
import { Question } from "../models/question.model";
import {Reponse} from "../models/reponse.model";

@Injectable({
  providedIn: "root",
})
export class QuizzService {
  constructor(private http: HttpClient) {}

  private quizzsUrl = "http://localhost:8080/quizzs"

  findAll(): Observable<Quizz[]> {
    return this.http.get<Quizz[]>(this.quizzsUrl)
  }

  findById(id: number): Observable<Quizz> {
    return this.http.get<Quizz>(`${this.quizzsUrl}/${id}`)
  }

  update(id: number, quizz: Quizz): Observable<Quizz> {
    return this.http.post<Quizz>(`${this.quizzsUrl}/${id}`, quizz)
  }

  create(quizz: Quizz): Observable<Quizz> {
    return this.http.post<Quizz>(this.quizzsUrl, quizz)
  }

  delete(quizz: Quizz) {
    return this.http.delete(`${this.quizzsUrl}/${quizz.id}`)
  }

  findQuestionsFromQuizz(quizzId: string): Observable<Question[]> {
    return this.http.get<Question[]>(this.quizzsUrl + `/${quizzId}/questions`)
  }

  findReponsesFromQuestion(questionId: string): Observable<Reponse[]> {
    return this.http.get<Reponse[]>(`http://localhost:8080/questions/${questionId}/reponses`)
  }
}
