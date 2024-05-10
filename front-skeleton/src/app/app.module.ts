import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { HttpClientModule } from "@angular/common/http"
import {UsersComponent} from "./users/users.component";
import {UserDetailsComponent} from "./users/user-details/user-details.component";
import {QuizzsComponent} from "./quizzs/quizzs.component";
import {QuizzDetailsComponent} from "./quizzs/quizz-details/quizz-details.component";
import {QuizzQuestionsComponent} from "./quizzs/quizz-questions/quizz-questions.component";
import {AdministrationComponent} from "./Administration/administration.component";
import {QuizzsPlayerComponent} from "./quizzs/quizz-player/quizzs-player.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdministrationComponent,
    UsersComponent,
    UserDetailsComponent,
    QuizzsComponent,
    QuizzDetailsComponent,
    QuizzQuestionsComponent,
    QuizzsPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
