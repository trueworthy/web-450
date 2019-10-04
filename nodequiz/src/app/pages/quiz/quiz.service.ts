
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuizService { 

    quizName: string;
    quizzes: any;
    questions: any;

constructor(private http: HttpClient) {

  }

  getQuiz() {
    return this.http.get('./assets/questions.json');
  }
}