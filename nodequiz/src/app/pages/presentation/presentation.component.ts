import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from './presentation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  images: any;
  presentations: any;
  presentationName: string;
  quizName: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private presentationService: PresentationService, private router: Router,) {
    this.presentationName = route.snapshot.paramMap.get('name');
    this.presentationService.getPresentations()
    .subscribe(res => {
      this.presentations = res;
      console.log(this.presentations);
      this.images = this.presentations.filter(p => p.name === this.presentationName)[0].images;
      console.log(this.images);
    })
  }
  goToQuiz(quizName) {
    this.quizName = quizName;
    console.log('Quiz: ' + this.quizName);
    this.router.navigate(['/dashboard/questions/' + this.quizName]);
  }

  ngOnInit() {

  }

}