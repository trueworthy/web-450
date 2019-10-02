import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  prezId: number;

  constructor(private router: ActivatedRoute) {
    this.prezId = parseInt(this.router.snapshot.paramMap.get('id'), 10);
  }

  ngOnInit() {
  }

}
