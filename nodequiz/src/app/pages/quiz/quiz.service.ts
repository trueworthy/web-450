
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuizService { 

    quizName: string;
    quizId: number;
    quizzes: any;
    questions: string;
    answers: string;

constructor(private http: HttpClient, router: Router) {
  this.quizzes = [
    { id: 1, name: "HTML" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "Node" }
  ]
  }

  getQuizzes() {
    return this.http.get('./assets/questions.json');
  }
}