/**
 * Author: Lea Trueworthy
 * Description: Quiz page guide
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './quiz.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { error } from 'util';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId: string;
  quizzes: any;
  quiz: any;
  questions: any;
  employeeId: number;
  //quizName: string;
  answers: string;
  quizNameFromUrl: string;
  quizResults: any;
  q: any = [];
  qs: any = [];
  cumulativeSummary: {};
  quizSummary: {}

  constructor(private route: ActivatedRoute, private location: Location, private dialog: MatDialog, private http: HttpClient, private quizService: QuizService) {
    this.quizId = (this.route.snapshot.paramMap.get('id'));

    this.quizService.getQuizzes().subscribe(res => {
      this.quizzes = res;
      this.questions = this.quizzes.filter(q => q.name === this.quizId)[0].questions;
      //this.quizNameFromUrl = route.snapshot.paramMap.get('id');  quizName: {{this.quizNameFromUrl}}

      console.log(this.quizzes);
      console.log(this.quiz);
    })
  }
  ngOnInit() {

  }
  onSubmit(form) {
    // score calculator
    const totalPossiblePoints = 100;
    const questionCount = this.quiz.questions.length;
    let pointsPerQusetions = totalPossiblePoints / questionCount;
    let quizScore = 0;

    //determining user's selction
    let correctRunningTotal = 0;
    let selectedAnswerIds = [];
    let selectedisCorrectProp = [];
    console.log("Q: " + this.questions);

    // FORM
    this.quizResults = form;
    this.quizResults['employeeId'] = this.employeeId;
    this.quizResults['quizId'] = this.quizId;
    console.log("form: " + form);



    // save quiz results to database
    this.http.post('/api/results/', {
      employeeId: this.employeeId,
      quizId: this.quizId,
      // Should I add get questions here?
      results: JSON.stringify(form)
    }).subscribe(
      err => {
        console.log("POST call to results collection in error", err);
      },
      () => {
        console.log("The POST to results collection is now completed.");
      });
    /* this.quizResults = form;
     this.quizResults['employeeId'] = this.employeeId; // add the employeeId to the quizResults ojbect
     console.table(this.quizResults);  //show quiz results
     alert('Employee: ' + this.employeeId + '\nQuiz: ' + this.quiz)
 
     localStorage.setItem('employeeId', '');
   } }
   catch (error) {
     this.http = error;
   }
   goBack() {
     this.location.back();
   }
 
 
   }
   
    onSubmit() {
     alert('Employee: ' + this.employeeId + '\nQuiz: ' + this.quizId)
     }*/
  }
}