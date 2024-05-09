import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentsResolver } from "students/students.resolver"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { StudentDetailsResolver } from "students/student-details/student-details.resolver"
import { MajorsComponent } from "majors/majors.component"
import { MajorsResolver } from "majors/majors.resolver"
import { MajorStudentsResolver } from "majors/major-students/major-students.resolver"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
import { UserDetailsComponent } from "./users/user-details/user-details.component";
import { UsersComponent } from "./users/users.component";
import { UsersResolver } from "./users/users.resolver";
import { UserDetailsResolver } from "./users/user-details/user-details.resolver";
import { QuizzDetailsComponent } from "./quizzs/quizz-details/quizz-details.component";
import { QuizzsComponent } from "./quizzs/quizzs.component";
import { QuizzsResolver } from "./quizzs/quizzs.resolver";
import { QuizzDetailsResolver } from "./quizzs/quizz-details/quizz-details.resolver";
import {QuizzQuestionsComponent} from "./quizzs/quizz-questions/quizz-questions.component";
import {QuizzQuestionsResolver} from "./quizzs/quizz-questions/quizz-questions.resolver";
import {AdministrationComponent} from "./Administration/administration.component";
import {QuizzsPlayerComponent} from "./quizzs/quizz-player/quizzs-player.component";
import {QuizzsPlayerResolver} from "./quizzs/quizz-player/quizzs-player.resolver";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", component: AdministrationComponent },
  {
    path: "etudiants",
    component: StudentsComponent,
    resolve: {
      students: StudentsResolver,
    },
  },
  {
    path: "details-etudiant/:id",
    component: StudentDetailsComponent,
    resolve: {
      student: StudentDetailsResolver,
    },
  },
  {
    path: "utilisateurs",
    component: UsersComponent,
    resolve: {
      users: UsersResolver,
    },
  },
  {
    path: "details-utilisateur/:id",
    component: UserDetailsComponent,
    resolve: {
      user: UserDetailsResolver,
    },
  },
  {
    path: "adminQuizzs",
    component: QuizzsComponent,
    resolve: {
      quizzs: QuizzsResolver,
    },
  },
  {
    path: "quizzs",
    component: QuizzsPlayerComponent,
    resolve: {
      quizzs: QuizzsPlayerResolver,
    },
  },
  {
    path: "details-quizz/:id",
    component: QuizzDetailsComponent,
    resolve: {
      quizz: QuizzDetailsResolver,
    },
  },
  {
    path: "questions-quizz/:id",
    component: QuizzQuestionsComponent,
    resolve: {
      quizz: QuizzQuestionsResolver,
    },
  },
  {
    path: "filieres",
    component: MajorsComponent,
    resolve: {
      majors: MajorsResolver,
    },
  },
  {
    path: "etudiants-filiere/:id",
    component: MajorStudentsComponent,
    resolve: {
      studentsFromMajor: MajorStudentsResolver,
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
