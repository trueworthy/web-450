
/**
 * Author: Lea Trueworthy
 * Description: routing for quiz page to questions
 */

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

  constructor(private http: HttpClient, private router: Router) {
  this.quizzes = [
    { id: 101, name: "html-css" },
    { id: 102, name: "JavaScript" },
    { id: 103, name: "Node" }
  ]
}

  getQuizzes() {
    return this.http.get('./assets/questions.json');
  }
  user : any;

  goToResults(user) {
    this.user = user;
    console.log('user');
    console.log('Score: ' + this.user);
    this.router.navigate(['/dashboard/questions/' + this.user]);
  }
}
