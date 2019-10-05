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
  quiz: any;
  quizzes: any;
  quizId: number;
  answers: boolean;

  constructor(private route: ActivatedRoute, private location: Location, private http: HttpClient, private quizService: QuizService) {
    this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'), 10);
    this.quizService.getQuiz().subscribe(res => {
      this.quizzes = res;
      this.quiz = this.quizzes.filter(p => p.name === this.quizId)[0];

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