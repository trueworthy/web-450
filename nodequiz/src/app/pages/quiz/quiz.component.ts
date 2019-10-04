import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QuizService } from './quiz.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any;
  quizzes: any;
  quizName: string;

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private quizService: QuizService) {
    this.quizName = route.snapshot.paramMap.get('name');
    this.quizService.getQuiz()
    .subscribe(res => {
      this.quizzes = res;
      console.log(this.quizzes);
      this.questions = this.quizzes.filter(p => p.name === this.quizName)[0].id;
      console.log(this.questions);
    })
  }


  ngOnInit() {

  }

}