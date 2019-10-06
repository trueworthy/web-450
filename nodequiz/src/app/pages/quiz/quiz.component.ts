import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './quiz.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId: number;
  quizzes: any;
  quiz: any;
  questions: any;
  //quizName: string;
  answers: string;
  quizNameFromUrl: string;

  constructor(private route: ActivatedRoute, private location: Location, private http: HttpClient, private quizService: QuizService) {
    this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'), 10);

    this.quizService.getQuizzes().subscribe(res => {
      this.quizzes = res;
      this.quiz = this.quizzes.filter(q => q.quizId === this.quizId)[0].questions;
      //this.quizNameFromUrl = route.snapshot.paramMap.get('id');  quizName: {{this.quizNameFromUrl}}

      console.log(this.quizzes);
      console.log(this.quiz);
    })
  }
  ngOnInit() {

  }

  goBack() {
    this.location.back();
  }

}