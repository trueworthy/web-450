/**
 * Author: Lea Trueworthy
 * Description: employee results from quiz
 */

import { Component, OnInit, Input } from "@angular/core";
import { QuizComponent } from "../quiz/quiz.component";
import { Router } from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: "app-quiz-results",
  templateUrl: "../results/results.component.html",
  styleUrls: ["../results/results.component.css"]
})
export class ResultsComponent implements OnInit {
  // resultsDisplay: any;

  constructor(
    private dialogRef: MatDialogRef<QuizComponent>,
    private router: Router
  ) {}
  @Input() public results;
  @Input() public userData;

  ngOnInit() {
    console.log(this.results);
    console.log(this.userData);
  }

  close() {
    this.dialogRef.close();
    this.router.navigate(["/"]);
  }
}